using NashrahShaikh.Suite.Maui.Models;

namespace NashrahShaikh.Suite.Maui.Pages
{
    public partial class ProjectDetailPage : ContentPage
    {
        public ProjectDetailPage(ProjectDetailPageModel model)
        {
            InitializeComponent();

            BindingContext = model;
        }
    }
}
