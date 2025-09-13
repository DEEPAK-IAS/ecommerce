import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ProductsSlider from "../../components/ProductsSlider";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ProductZoom from "../../components/ProductZoom";
import { Button, TextField } from "@mui/material";
import QtyBox from "../../components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductDetailsComponent from "../../components/ProductDetails";

const ProductDetails = () => {
 
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5 ">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[30%] h-[60vh] overflow-hidden">
            <ProductZoom />
          </div>
          <div className="productContent w-[60%] p-10 pl-10">
            <ProductDetailsComponent/>
          </div>
        </div>

        <div className="container bg-white pt-10">
          <div className="flex items-center gap-8">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews(5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 p-8 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                culpa excepturi libero. Modi ad eos nostrum autem delectus
                dolorem, maxime ipsa odit quisquam maiores sequi.
              </p>
              <h4>LightWeight Design</h4>
              <p>
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>
              <h4>Free Shipping & Return</h4>
              <p>
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>
              <h4>Money Back Guarantee </h4>
              <p>
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>
              <h4>Online Support</h4>
              <p>
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange. I
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 p-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-700">
                  <thead class="text-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folder (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folder (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Door pass through
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 font-[500]">
                        35″L x 24"W x 37-45″H (front to back wheel)
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 18.5"W x 16.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">
                        32.5"L x 24"W x 18.5"H
                      </td>
                      <td class="px-6 py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 p-8 rounded-md">
              <div className="w-full productReviewContainer">
                <h2 className="text-[20px]"> Customer question & answer</h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-1">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Deepak surya</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Animi, dolorum suscipit minus quas quasi fuga.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Deepak surya</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Animi, dolorum suscipit minus quas quasi fuga.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Deepak surya</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Animi, dolorum suscipit minus quas quasi fuga.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Deepak surya</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Animi, dolorum suscipit minus quas quasi fuga.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Multiline"
                      multiline
                      rows={5}
                      className="w-full mb-5"
                    />
                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} />

                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] mb-">Related Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
