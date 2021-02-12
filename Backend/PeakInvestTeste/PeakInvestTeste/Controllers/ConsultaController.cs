using Microsoft.AspNetCore.Mvc;
using PeakInvestTeste.Models.Services;

namespace PeakInvestTeste.Controllers
{
    [Route("api/[controller]")]
    public class ConsultaController : Controller
    {

        [HttpGet]
        public IActionResult Get([FromServices]Lista lista, int id)
        {
            if (id > 0 && id <= 3)
            {
                var resultado = lista.Consultar(id);
                return Json(resultado);
            }
            return BadRequest("Intervalo de Valores inválidos!");
        }
    }
}
