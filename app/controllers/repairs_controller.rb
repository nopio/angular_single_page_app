class RepairsController < ApplicationController
  before_action :set_customer, only: [:create]
  before_action :set_repair, only: [:show, :edit, :update, :destroy]

  def show
  end

  def search
    @repairs = Repair.search(params[:query], params[:customer_id])
  end

  def create
    @repair = @customer.repairs.new(repair_params)

    respond_to do |format|
      if @repair.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @repair.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @repair.update(repair_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @repair.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @repair.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  def set_repair
    @repair = Repair.find(params[:id])
  end

  def set_customer
    @customer = Customer.find(params[:customer_id])
  end

  def repair_params
    params.require(:repair).permit(:customer_id, :status, :price, :name, :description)
  end
end
