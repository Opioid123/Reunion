using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace Reunion
{
    //api/Files
    [Route("api/[controller]")]
    public class ImageController : Controller
    {
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

        //[HttpGet]
        //public IActionResult Index()
        //{
        //    using (ImageDBContext dbContext = new ImageDBContext())
        //    {
        //        List<Guid> iamgeIds = dbContext.Images.Select(m => m.Id).ToList();
        //        return View(iamgeIds);
        //    }
        //}

        [HttpPost]
        public IActionResult UploadImage(IFormFile file, string name, string type)
        {
            Image imageEntity = new Image();
            CollegeImage collegeImageEntity = new CollegeImage();
            MemoryImage memoryImageEntity = new MemoryImage();
            MemoryStream ms = new MemoryStream();
            file.OpenReadStream().CopyTo(ms);

            System.Drawing.Image image = System.Drawing.Image.FromStream(ms);

            //IFormFile uploadedImage = files.FirstOrDefault();
            if (type == "college")
            {
                if (file == null || file.ContentType.ToLower().StartsWith("image/"))
                {
                    using (ImageDBContext dbContext = new ImageDBContext())
                    {

                        collegeImageEntity = new CollegeImage()
                        {
                            Id = Guid.NewGuid(),
                            Name = name,
                            Data = ms.ToArray(),
                            Width = image.Width,
                            Height = image.Height,
                            ContentType = file.ContentType
                        };

                        dbContext.CollegeImages.Add(collegeImageEntity);

                        dbContext.SaveChanges();
                    }
                }
            }

                if (type == "memory")
                {
                    if (file == null || file.ContentType.ToLower().StartsWith("image/"))
                    {
                        using (ImageDBContext dbContext = new ImageDBContext())
                        {

                            memoryImageEntity = new MemoryImage()
                            {
                                Id = Guid.NewGuid(),
                                Name = name,
                                Data = ms.ToArray(),
                                Width = image.Width,
                                Height = image.Height,
                                ContentType = file.ContentType
                            };

                            dbContext.MemoryImages.Add(memoryImageEntity);

                            dbContext.SaveChanges();
                        }
                    }
                }

            if (type == "person")
            {
                if (file == null || file.ContentType.ToLower().StartsWith("image/"))
                {
                    using (ImageDBContext dbContext = new ImageDBContext())
                    {
                        imageEntity = new Image()
                        {
                            Id = Guid.NewGuid(),
                            Name = name,
                            Data = ms.ToArray(),
                            Width = image.Width,
                            Height = image.Height,
                            ContentType = file.ContentType
                        };

                        dbContext.Images.Add(imageEntity);

                        dbContext.SaveChanges();
                    }
                }
            }
            if (type == "person")
            {
                return Ok(imageEntity);
            }

            if (type == "memory")
            {
                return Ok(memoryImageEntity);
            }

            if (type == "college")
            {
                return Ok(collegeImageEntity);
            }
            return BadRequest();
        }

        [HttpGet("CollegeImage/{id}")]
        public FileStreamResult ViewCollegeImage(string id)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                CollegeImage image = dbContext.CollegeImages.FirstOrDefault(m => m.Id.ToString() == id);

                MemoryStream ms = new MemoryStream(image.Data);

                return new FileStreamResult(ms, image.ContentType);
            }
        }

        [HttpGet("PersonImage/{id}")]
        public FileStreamResult ViewPersonImage(string id)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                Image image = dbContext.Images.FirstOrDefault(m => m.Id.ToString() == id);

                MemoryStream ms = new MemoryStream(image.Data);

                return new FileStreamResult(ms, image.ContentType);
            }
        }

        [HttpGet("MemoryImage/{id}")]
        public FileStreamResult ViewMemoryImage(string id)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                MemoryImage image = dbContext.MemoryImages.FirstOrDefault(m => m.Id.ToString() == id);

                MemoryStream ms = new MemoryStream(image.Data);

                return new FileStreamResult(ms, image.ContentType);
            }
        }

        [HttpGet("CollegeImageList")]
        public IActionResult CollegeImage()
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                IQueryable<string> idCollection = dbContext.CollegeImages.Select(x => x.Id.ToString());

                return Ok(idCollection.ToList<string>());
            }
        }

        [HttpGet("PersonImageListByBranch/{id}")]
        public IActionResult PersonImageByBranch(string id)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                IQueryable<Profile> idCollection = dbContext.Profile.Where(y => y.Branch.ToLower() == id);

                return Ok(idCollection.ToList<Profile>());
            }
        }

        [HttpGet("MemoryImageList")]
        public IActionResult MemoryImage()
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                IQueryable<string> idCollection = dbContext.MemoryImages.Select(x => x.Id.ToString());

                return Ok(idCollection.ToList<string>());
            }
        }
    }
}
