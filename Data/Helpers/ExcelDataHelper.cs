using Kafe.Models;
using System.IO;
using System.Data;
using ExcelDataReader;

namespace Kafe.Data.Helpers;

public static class ExcelDataHelper
{
    public static List<Product> LoadFromExcel()
    {
        var products = new List<Product>();
        var path = Path.Combine(Directory.GetCurrentDirectory(), 
            "wwwroot/data/kafe.xlsx");

        System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

        using var stream = File.Open(path, FileMode.Open, FileAccess.Read);
        using (var reader = ExcelReaderFactory.CreateReader(stream))
        {
            while (reader.Read())
            {
                products.Add(new Product
                {
                    Name = reader.GetString(0),
                    Price = reader.GetString(1),
                    SecondPrice = reader.GetString(2),
                    Category = reader.GetString(3),
                    Description = reader.GetString(4)
                });
            }
        }

        stream.Dispose();
        return products;
    }
}
