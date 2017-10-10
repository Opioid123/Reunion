using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Threading;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.Http;

namespace HelloWorldData.Controllers
{
    //api/Files
    [Route("api/[controller]")]
    public class UploadController : Controller
    {
        public List<SystemFile> colSystemFiles = new List<SystemFile>();
        private readonly IHostingEnvironment _hostEnvironment;

        public UploadController(IHostingEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;

            // Set WebRootPath to wwwroot\Files directiry
            _hostEnvironment.WebRootPath =
                System.IO.Path.Combine(
                    Directory.GetCurrentDirectory(),
                    @"wwwroot\Files");
        }

        // api/Upload
        [HttpPost]
        public IActionResult Index(ICollection<IFormFile> files)
        {
            if (!Request.HasFormContentType)
                return BadRequest();

            // Create wwwroot\Files directory if needed
            if (!Directory.Exists(_hostEnvironment.WebRootPath))
            {
                DirectoryInfo di = 
                    Directory.CreateDirectory(_hostEnvironment.WebRootPath);
            }

            var form = Request.Form;
            // Process all Files
            foreach (var file in form.Files)
            {
                // Process file
                using (var readStream = file.OpenReadStream())
                {
                    var filename = ContentDispositionHeaderValue
                                            .Parse(file.ContentDisposition)
                                            .FileName.Value
                                            .Trim('"');

                    filename = _hostEnvironment.WebRootPath + $@"\{filename}";

                    //Save file to harddrive
                    using (FileStream fs = System.IO.File.Create(filename))
                    {
                        file.CopyTo(fs);
                        fs.Flush();
                    }
                }
            }

            return Ok();
        }
    }
}
