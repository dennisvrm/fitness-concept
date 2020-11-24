defmodule FitnessWeb.FriendsView do
  use FitnessWeb, :view

  def render("friends.json", %{data: friends}) do
    friends
  end
end
