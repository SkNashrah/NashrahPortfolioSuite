using NashrahShaikh.Suite.Maui.Models;

namespace NashrahShaikh.Suite.Maui.Pages.Controls
{
    public class ChipDataTemplateSelector : DataTemplateSelector
    {
        public DataTemplate? SelectedTagTemplate { get; set; }
        public DataTemplate? NormalTagTemplate { get; set; }

        protected override DataTemplate OnSelectTemplate(object item, BindableObject container)
        {
            return ((item as Tag)?.IsSelected ?? false ? SelectedTagTemplate : NormalTagTemplate) ?? throw new InvalidOperationException("DataTemplates SelectedTagTemplate and NormalTagTemplate must be set to a non-null value.");
        }
    }
}
