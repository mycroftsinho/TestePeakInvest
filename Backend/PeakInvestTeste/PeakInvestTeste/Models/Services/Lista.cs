using System.Collections.Generic;
using System.Linq;

namespace PeakInvestTeste.Models.Services
{
    public class Lista
    {
        public Lista()
        {
            Dados = new List<KeyValuePair<int, string>>();
            DefinirDados();
        }

        public List<KeyValuePair<int, string>> Dados { get; private set; }

        public string Consultar(int id)
        {
            var item = Dados.FirstOrDefault(x => x.Key.Equals(id));
            return item.Value;
        }

        private void DefinirDados()
        {
            Dados.Add(KeyValuePair.Create(1, "João"));
            Dados.Add(KeyValuePair.Create(2, "Maria"));
            Dados.Add(KeyValuePair.Create(3, "Ana"));
        }
    }
}
