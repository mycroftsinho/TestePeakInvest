using Microsoft.AspNetCore.Mvc;
using PeakInvestTeste.Models.Dto;
using PeakInvestTeste.Models.Services;
using System.Globalization;

namespace PeakInvestTeste.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController : Controller
    {

        [HttpPost]
        [Produces("application/json")]
        public IActionResult Post([FromServices]Calculo calculo, [FromBody]CadastroDto cadastro)
        {
            if (ModelState.IsValid)
            {
                var resultado = calculo.Realizar(cadastro.Parcela, cadastro.Valor);
                return Json(resultado.ToString("C3", new CultureInfo("pt-BR")));
            }
            return BadRequest("Campos Inválidos!");
        }
    }
}
