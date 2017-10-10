using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace HelloWorldData.Controllers
{
    //api/Files
    [Route("api/[controller]")]
    public class ImageController : Controller
    {
        public List<SystemFile> colSystemFiles = new List<SystemFile>();
        private readonly IHostingEnvironment _hostEnvironment;

        public ImageController(IHostingEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;

            // Set WebRootPath to wwwroot\Files directiry
            _hostEnvironment.WebRootPath =
                System.IO.Path.Combine(
                    Directory.GetCurrentDirectory(),
                    @"wwwroot\Files");
        }

        [HttpGet]
        public IActionResult Index()
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                List<Guid> iamgeIds = dbContext.Images.Select(m => m.Id).ToList();
                return View(iamgeIds);
            }
        }

        [HttpPost]
        public IActionResult UploadImage(IList<IFormFile> files)
        {
            IFormFile uploadedImage = files.FirstOrDefault();
            if (uploadedImage == null || uploadedImage.ContentType.ToLower().StartsWith("image/"))
            {
                using (ImageDBContext dbContext = new ImageDBContext())
                {
                    MemoryStream ms = new MemoryStream();
                    uploadedImage.OpenReadStream().CopyTo(ms);

                    System.Drawing.Image image = System.Drawing.Image.FromStream(ms);

                    Models.Image imageEntity = new Models.Image()
                    {
                        Id = Guid.NewGuid(),
                        Name = uploadedImage.Name,
                        Data = ms.ToArray(),
                        Width = image.Width,
                        Height = image.Height,
                        ContentType = uploadedImage.ContentType
                    };

                    dbContext.Images.Add(imageEntity);

                    dbContext.SaveChanges();
                }
            }

            return RedirectToAction("Index");
        }

        [HttpGet]
        public FileStreamResult ViewImage(Guid id)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                Models.Image image = dbContext.Images.FirstOrDefault(m => m.Id == id);

                MemoryStream ms = new MemoryStream(image.Data);

                return new FileStreamResult(ms, image.ContentType);
            }
        }
    }
}
