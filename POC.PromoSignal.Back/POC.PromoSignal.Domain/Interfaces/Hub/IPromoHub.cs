using POC.PromoSignal.Domain.Entity;

namespace POC.PromoSignal.Domain.Interfaces.Hub
{
    public interface IPromoHub
    {
        Task CadastrarPromocao(Promocao promocao);
    }
}
