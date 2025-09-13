import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";

const CheckOut = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>
            <form className="w-full mt-5">
              <div className="flex items-enter gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <h5 className="text-[14px] font-[500] mb-3">Street address</h5>

              <div className="flex items-enter gap-5 pb-5">
                <div className="col w-[100%] ">
                  <TextField
                    label="House number and street name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-enter gap-5 pb-5">
                <div className="col w-[100%] ">
                  <TextField
                    label="Apartment,suite,until,etc (optional)"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <h5 className="text-[14px] font-[500] mb-3">Town / City *</h5>

              <div className="flex items-enter gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    label="Town / City *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    label="State / Country *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <h5 className="text-[14px] font-[500] mb-3">Postcode / ZIP *</h5>

              <div className="flex items-enter gap-5 pb-5">
                <div className="col w-[100%] ">
                  <TextField
                    label="ZIP Code"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-enter gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    label="Phone"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>

            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-3">
              <div className="flex items-center justify-between py-4 border-t border-b border-[rgba(0,0,0,0.1)]">
                <span className="text-[14px] font-[600]">Product</span>
                <span className="text-[14px] font-[600]">Subtotal</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]">$1,300.00</span>
              </div>
            </div>

            <Button className="btn-org btn-lg w-full flex gap-2 items-center"> <BsFillBagCheckFill className="text-[20px]"/> CheckOut</Button> 

          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
