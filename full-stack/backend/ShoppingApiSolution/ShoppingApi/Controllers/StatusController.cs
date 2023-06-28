using Microsoft.AspNetCore.Mvc;

namespace ShoppingApi.Controllers;

public class StatusController : ControllerBase
{
    private readonly IlookupTheStatus _statusLookup;

    //GET/status
    [HttpGet("/status")]
    public async Task<ActionResult> GetTheStatus()
    {

        
            GetStatusResponse response = await _statusLookup.GetCurrentStatusAsync();

            return Ok(response); //200 OK.
        
    }
}