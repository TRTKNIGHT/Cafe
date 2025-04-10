using Kafe.Data.Helpers;
using Kafe.Models;

namespace Kafe.Data;

public class ProductsData
{
    private static List<Product> allProducts = ExcelDataHelper.LoadFromExcel();

    private static List<Product> coffes = allProducts
        .Select(p => p)
        .Where(p => p.Category == "coffe")
        .ToList<Product>();

    private static List<Product> hotDrinks = allProducts
        .Select(p => p)
        .Where(p => p.Category == "hot drink")
        .ToList<Product>();

    private static List<Product> exirs = allProducts
        .Select(p => p)
        .Where(p => p.Category == "exir")
        .ToList<Product>();

    private static List<Product> snacks = allProducts
        .Select(p => p)
        .Where(p => p.Category == "snack")
        .ToList<Product>();

    private static List<Product> shakesAndIcecreams = allProducts
        .Select(p => p)
        .Where(p => p.Category == "shakes and ice creams")
        .ToList<Product>();

    private static List<Product> mocktales = allProducts
        .Select(p => p)
        .Where(p => p.Category == "mocktale")
        .ToList<Product>();

    private static List<Product> punches = allProducts
        .Select(p => p)
        .Where(p => p.Category == "punch")
        .ToList<Product>();

    private static List<Product> smothies = allProducts
        .Select(p => p)
        .Where(p => p.Category == "smothie")
        .ToList<Product>();

    public List<Product> Coffees
    {
        get { return coffes; }
    }

    public List<Product> HotDrinks
    {
        get { return hotDrinks; }
    }

    public List<Product> Exirs
    {
        get { return exirs; }
    }

    public List<Product> Snacks
    {
        get { return snacks; }
    }

    public List<Product> ShakesAndIceCreams
    {
        get { return shakesAndIcecreams; }
    }

    public List<Product> Mocktales
    {
        get { return mocktales; }
    }

    public  List<Product> Punches
    {
        get { return punches; }
    }

    public List<Product> Smothies
    {
        get { return smothies; }
    }
}
