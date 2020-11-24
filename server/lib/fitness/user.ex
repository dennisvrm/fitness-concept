defmodule Fitness.User do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "users" do
    field :email, :string
    field :firstName, :string
    field :lastName, :string
    field :password, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:firstName, :lastName, :email, :password])
    |> validate_required([:firstName, :lastName, :email, :password])
  end
end
