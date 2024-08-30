namespace POC.PromoSignal.Domain.Entity
{
    public class Promocao
    {
        public required string Empresa { get; set; }
        public required string Chamada { get; set; }
        public required string Regras { get; set; }
        public required string EnderecoUrl { get; set; }
    }
}
