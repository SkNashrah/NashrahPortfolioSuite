using NashrahShaikh.Suite.Maui.Models;
using NashrahShaikh.Suite.Maui.PageModels;

namespace NashrahShaikh.Suite.Maui.Pages
{
    public partial class MainPage : ContentPage
    {
        public MainPage(MainPageModel model)
        {
            InitializeComponent();
            BindingContext = model;
        }
    }
}