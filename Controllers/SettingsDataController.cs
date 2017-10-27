using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace Analysis.Controllers
{
    [Route("api/[controller]")]
    public class SettingsDataController : Controller
    {
        [HttpGet("[action]")]
        public string Canvas(string id)
        {
            using (StreamReader reader = new StreamReader("wwwroot/definitions/canvas.json"))
            {
                string json = reader.ReadToEnd();
                return json ;
            }
        }

        [HttpGet("[action]")]
        public string StaticDefintion(string fileName = "rates")
        {
            using (StreamReader reader = new StreamReader(fileName + ".json"))
            {
                string json = reader.ReadToEnd();
                return json;
            }
        }
    }
}
