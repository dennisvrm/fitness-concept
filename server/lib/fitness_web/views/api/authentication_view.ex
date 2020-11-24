defmodule FitnessWeb.AuthenticationView do
  use FitnessWeb, :view

  def render("authentication.json", %{data: authenticationData}) do
    %{
      firstName: authenticationData.firstName,
      lastName: authenticationData.lastName,
      email: authenticationData.email,
      userId: authenticationData.userId
    }
  end
end
