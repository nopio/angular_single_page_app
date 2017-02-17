class CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :edit, :update, :destroy]

  def index
    @customers = Customer.all
  end

  def search
    @customers = Customer.search(params[:query])
  end

  def show
  end

  def create
    @customer = Customer.new(customer_params)

    respond_to do |format|
      if @customer.save
        format.json { render :show, status: :created, location: @customer }
      else
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.json { render :show, status: :ok, location: @customer }
      else
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @customer.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  def set_customer
    @customer = Customer.find(params[:id])
  end

  def customer_params
    params.require(:customer).permit(:name, :email, :street, :city, :post_code)
  end
end
