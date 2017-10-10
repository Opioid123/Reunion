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
    public class OpioidController : Controller
    {
        private readonly IHostingEnvironment _hostEnvironment;

        public OpioidController(IHostingEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;

            // Set WebRootPath to wwwroot\Files directiry
            _hostEnvironment.WebRootPath =
                System.IO.Path.Combine(
                    Directory.GetCurrentDirectory(),
                    @"wwwroot\Files");
        }


        [HttpGet("Perform/{id}/{operation}/{output}")]
        public IActionResult Operation(string id, string operation,  string output)
        {
            bool returnValue = false; ;
            if (output == "true")
            { returnValue = true; }

            if (output == "false")
            { returnValue = false; }
            return Ok(returnValue); 
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
