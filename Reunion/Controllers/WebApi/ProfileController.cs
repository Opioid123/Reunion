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
    [Route("api/[controller]")]
    public class ProfileController : Controller
    {
        private readonly IHostingEnvironment _hostEnvironment;

        public ProfileController(IHostingEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;

            // Set WebRootPath to wwwroot\Files directiry
            _hostEnvironment.WebRootPath =
                System.IO.Path.Combine(
                    Directory.GetCurrentDirectory(),
                    @"wwwroot\Files");
        }


        [HttpGet("Student/{id}")]
        public IActionResult StudentProfile(string id)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                Profile profile = dbContext.Profile.FirstOrDefault(m => m.Id.ToString() == id);

                return Ok(profile);
            }
        }

        [HttpPost("[action]")]
        public IActionResult Student([FromBody] Profile profile)
        {
            using (ImageDBContext dbContext = new ImageDBContext())
            {
                profile.Id = Guid.NewGuid();
                dbContext.Profile.Add(profile);
                dbContext.SaveChanges();
            }
            return Ok(profile);
        }
    }
}
