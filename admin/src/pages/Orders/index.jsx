import { Button } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../components/Badge";
import SearchBox from "../../components/SearchBox";

import { useState } from "react";

const Orders = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct == index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  return (
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-[18px] font-bold">Recent Orders</h2>
        <div className="w-[40%]">
          <SearchBox />
        </div>
      </div>

      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-sm text-left text-gray-700 mb-2">
          <thead className="text-xs uppercase bg-gray-100 text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                &nbsp;
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Payment Id
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Name
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Address
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Pincode
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Email
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                User Id
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Order Status
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gra-800 dark:border-gray-700">
              <td className="px-6 py-4 font-[500]">
                <Button
                  className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                  onClick={() => isShowOrderedProduct(0)}
                >
                  {isOpenOrderedProduct == 0 ? (
                    <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                  ) : (
                    <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                  )}
                </Button>
              </td>
              <td className="px-6 py-4 font-[500]">
                <span className="text-primary font-[500]">68234234349234</span>
              </td>
              <td className="px-6 py-4 font-[500]">
                <span className="text-primary  font-[500]">
                  pay_PTPQqEXFhrtpy8
                </span>
              </td>
              <td className="px-6 py-4 font-[500] whitespace-nowrap">
                Deeapk surya
              </td>
              <td className="px-6 py-4 font-[500]">4353423411</td>
              <td className="px-6 py-4 font-[500]">
                <span className="block w-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error quisquam reprehenderit itaque.
                </span>
              </td>
              <td className="px-6 py-4 font-[500]">624001</td>
              <td className="px-6 py-4 font-[500]">3800</td>
              <td className="px-6 py-4 font-[500]">deepak@gmail.com</td>
              <td className="px-6 py-4 font-[500]">
                <span className="text-primary">66e12312312asdf1123wer1</span>
              </td>
              <td className="px-6 py-4 font-[500]">
                <Badge status="pending" />
              </td>
              <td className="px-6 py-4 font-[500]">24-07-2025</td>
            </tr>
            {isOpenOrderedProduct == 0 && (
              <tr>
                <td className="pl-20" colSpan={"6"}>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Product Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Product Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Sub Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gra-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-[500]">
                            <span className="text-gray-600">
                              68234234349234
                            </span>
                          </td>
                          <td className="px-6 py-4 font-[500]">
                            A-Line Kurti With Sharara& dupata
                          </td>
                          <td className="px-6 py-4 font-[500] whitespace-nowrap">
                            <img
                              src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                              alt=""
                              className="w-[40px] h-[40px] object-fit-cover rounded-md"
                            />
                          </td>
                          <td className="px-6 py-4 font-[500]">2</td>
                          <td className="px-6 py-4 font-[500]">1300</td>
                          <td className="px-6 py-4 font-[500]">2600</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gra-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-[500]">
                            <span className="text-gray-600">
                              68234234349234
                            </span>
                          </td>
                          <td className="px-6 py-4 font-[500]">
                            A-Line Kurti With Sharara& dupata
                          </td>
                          <td className="px-6 py-4 font-[500] whitespace-nowrap">
                            <img
                              src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                              alt=""
                              className="w-[40px] h-[40px] object-fit-cover rounded-md"
                            />
                          </td>
                          <td className="px-6 py-4 font-[500]">2</td>
                          <td className="px-6 py-4 font-[500]">1300</td>
                          <td className="px-6 py-4 font-[500]">2600</td>
                        </tr>
                        {/* <tr>
                                <td className="bg-[#f1f1f1]" colSpan={"12"}>
                                  asdf
                                </td>
                              </tr> */}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
            <tr className="bg-white border-b dark:bg-gra-800 dark:border-gray-700">
              <td className="px-6 py-4 font-[500]">
                <Button
                  className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                  onClick={() => isShowOrderedProduct(1)}
                >
                  {isOpenOrderedProduct == 1 ? (
                    <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                  ) : (
                    <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                  )}
                </Button>
              </td>
              <td className="px-6 py-4 font-[500]">
                <span className="text-primary font-[500]">68234234349234</span>
              </td>
              <td className="px-6 py-4 font-[500]">
                <span className="text-primary font-[500]">
                  pay_PTPQqEXFhrtpy8
                </span>
              </td>
              <td className="px-6 py-4 font-[500] whitespace-nowrap">
                Deeapk surya
              </td>
              <td className="px-6 py-4 font-[500]">4353423411</td>
              <td className="px-6 py-4 font-[500]">
                <span className="block w-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error quisquam reprehenderit itaque.
                </span>
              </td>
              <td className="px-6 py-4 font-[500]">624001</td>
              <td className="px-6 py-4 font-[500]">3800</td>
              <td className="px-6 py-4 font-[500]">deepak@gmail.com</td>
              <td className="px-6 py-4 font-[500]">
                <span className="text-primary">66e12312312asdf1123wer1</span>
              </td>
              <td className="px-6 py-4 font-[500]">
                <Badge status="pending" />
              </td>
              <td className="px-6 py-4 font-[500]">24-07-2025</td>
            </tr>
            {isOpenOrderedProduct == 1 && (
              <tr>
                <td className="pl-20" colSpan={"6"}>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Product Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Product Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 whitespace-nowrap"
                          >
                            Sub Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gra-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-[500]">
                            <span className="text-gray-600">
                              68234234349234
                            </span>
                          </td>
                          <td className="px-6 py-4 font-[500]">
                            A-Line Kurti With Sharara& dupata
                          </td>
                          <td className="px-6 py-4 font-[500] whitespace-nowrap">
                            <img
                              src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                              alt=""
                              className="w-[40px] h-[40px] object-fit-cover rounded-md"
                            />
                          </td>
                          <td className="px-6 py-4 font-[500]">2</td>
                          <td className="px-6 py-4 font-[500]">1300</td>
                          <td className="px-6 py-4 font-[500]">2600</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gra-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-[500]">
                            <span className="text-gray-600">
                              68234234349234
                            </span>
                          </td>
                          <td className="px-6 py-4 font-[500]">
                            A-Line Kurti With Sharara& dupata
                          </td>
                          <td className="px-6 py-4 font-[500] whitespace-nowrap">
                            <img
                              src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                              alt=""
                              className="w-[40px] h-[40px] object-fit-cover rounded-md"
                            />
                          </td>
                          <td className="px-6 py-4 font-[500]">2</td>
                          <td className="px-6 py-4 font-[500]">1300</td>
                          <td className="px-6 py-4 font-[500]">2600</td>
                        </tr>
                        {/* <tr>
                                <td className="bg-[#f1f1f1]" colSpan={"12"}>
                                  asdf
                                </td>
                              </tr> */}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
