namespace ShoppingApi.Controllers.ShoppingList;

public class ShoppingListController : ControllerBase
{
    [HttpGet("/shopping-list")]
    public async Task<ActionResult> GetShoppingList()
    {



        var response = new CollectionResponse<ShoppingListItemModel>();
        response.Data.Add(new ShoppingListItemModel { Id = "1", Description = "Beer", Purchased = false });
        response.Data.Add(new ShoppingListItemModel { Id = "2", Description = "Shampoo", Purchased = true });
        return Ok(response);

    }
}