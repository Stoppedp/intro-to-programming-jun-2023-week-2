namespace ShoppingApi.Models;

public record GetStatusResponse
{
    public string Status { get; set; } = string.Empty;
    public DateTime LastChcked { get; set; }
    public string Message { get; internal set; }
}

