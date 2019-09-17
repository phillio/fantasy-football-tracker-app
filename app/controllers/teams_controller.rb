class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show create update destroy]
  # before_action :authorize_request, except: %i[index show]
  # before_action :authorize_request
  # skip_before_action :verify_authenticity_token

  # GET /teams
  def index
    @teams = Team.all

    render json: { message: "ok", teams: @teams }
  end

  # GET /teams/1
  # def show
  #   render json: @team
  # end
  def show
    begin
      @team = Team.find(params[:id])
      render json: { message: "ok", team: @team }
    rescue ActiveRecord::RecordNotFound
      render json: { message: 'no team matches that ID' }, status: 404
    rescue StandardError => e
      render json: { message: e.to_s }, status: 500
    end
  end


  # POST /teams
  def create
    @team = Team.new(team_params)
    # puts @team

    if @team.save
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teams/1
  def update
    if @team.update(team_params)
      render json: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teams/1
  def destroy
    @team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def team_params
      params.require(:team).permit(:name, :user_id)
    end
end
