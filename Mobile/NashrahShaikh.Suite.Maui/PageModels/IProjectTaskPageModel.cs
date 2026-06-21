using CommunityToolkit.Mvvm.Input;
using NashrahShaikh.Suite.Maui.Models;

namespace NashrahShaikh.Suite.Maui.PageModels
{
    public interface IProjectTaskPageModel
    {
        IAsyncRelayCommand<ProjectTask> NavigateToTaskCommand { get; }
        bool IsBusy { get; }
    }
}