namespace Kafe.Models;

public class Product
{
    public string Name { get; set; }
    public string Price { get; set; }
    public string SecondPrice { get; set; } = string.Empty;
    public string Category { get; set; }
    public string? Description { get; set; } = string.Empty;
}
