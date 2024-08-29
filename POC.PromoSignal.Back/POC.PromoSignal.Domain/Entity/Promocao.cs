namespace POC.PromoSignal.Domain.Entity
{
    public class Promocao
    {
        public required string Empresa { get; set; }
        public required string Chamada { get; set; }
        public required decimal Desconto { get; set; }
        public required string EnderecoUrl { get; set; }
    }
}
