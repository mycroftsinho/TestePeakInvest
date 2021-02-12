using System.ComponentModel.DataAnnotations;

namespace PeakInvestTeste.Models.Dto
{
    public class CadastroDto
    {
        [Required(ErrorMessage = "Campo {0} obrigatório")]
        [Range(1, double.MaxValue, ErrorMessage = "Valor mínimo é 1")]
        public int Parcela { get; set; }

        [Required(ErrorMessage = "Campo {0} obrigatório")]
        [Range(1, double.MaxValue, ErrorMessage = "Valor mínimo é 1")]
        public decimal Valor { get; set; }
    }
}
