using Microsoft.AspNetCore.SignalR;
using POC.PromoSignal.Domain.Entity;
using POC.PromoSignal.Domain.Interfaces.Hub;

namespace POC.PromoSignal.API.Hubs
{
    public class PromoHub : Hub, IPromoHub
    {
        public async Task CadastrarPromocao(Promocao promocao)
        {
            await Clients.Caller.SendAsync("cadastradoSucesso");
            await Clients.Others.SendAsync("receberPromocao", promocao);
        }
    }
}
