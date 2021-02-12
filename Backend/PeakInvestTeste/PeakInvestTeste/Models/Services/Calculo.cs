namespace PeakInvestTeste.Models.Services
{
    public class Calculo
    {
        public Calculo()
        {
            Porcentagem = 0.05M;
        }

        public decimal Porcentagem { get; private set; }

        public decimal Realizar(int parcelas, decimal valor)
        {
            decimal valorFinal = (valor * parcelas) + ((valor * parcelas) * Porcentagem);

            return valorFinal;
        }
    }
}
