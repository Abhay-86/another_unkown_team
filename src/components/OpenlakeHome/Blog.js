import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Community from "../Community";
import "./Blog.css";
export default function Content() {
  return (
    <div>
      <div className="expContainer">
        <div className="expImg">
          <div className="expTag">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide anotherCarousel"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-block w-100" src="..." alt="First slide">
                <h1 class="text-center text-light">Openlake Title1</h1>
                <div class="beforeTopBlog">
                  <div class="topBlog">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat, deleniti sequi. Atque optio dolorum consequatur
                      nam sequi nostrum unde doloribus, blanditiis praesentium.
                      Error maiores harum sint maxime tempore quia atque, quae
                      in enim accusantium modi ducimus adipisci esse facilis
                      nostrum dolorum obcaecati blanditiis sed! Commodi minima
                      error perferendis enim ipsam, libero harum id quis
                      exercitationem amet tempora recusandae tenetur magni
                      voluptate tempore ducimus quae facere eveniet consequuntur
                      corporis possimus magnam? Voluptate quae, deleniti debitis
                      omnis illo perspiciatis dolores architecto facere
                      excepturi similique reprehenderit hic corporis veritatis,
                      dolorem, magnam sed sapiente quasi! Tempore nesciunt ex
                      officiis. Molestias et repellat voluptate necessitatibus
                      aspernatur libero ipsa esse quibusdam cum obcaecati
                      labore, explicabo quod asperiores blanditiis cupiditate
                      maiores iure voluptates velit exercitationem? Vitae quis
                      necessitatibus quaerat dolorum, accusantium inventore
                      expedita animi non placeat, incidunt esse ipsa hic
                      perferendis laboriosam iste sit! Voluptatum animi deleniti
                      veniam et ab suscipit laborum repellat delectus, possimus
                      eius optio quibusdam id? Eligendi atque autem perspiciatis
                      alias earum debitis repellat dolorem corporis repellendus?
                      Dicta dolores dolore unde quo in itaque delectus amet
                      quisquam alias voluptas, laudantium nihil. Est beatae
                      possimus tempore sunt distinctio corrupti iusto minima
                      mollitia cum officiis aut, sequi quod, obcaecati aliquid
                      maiores eius error aliquam, modi non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-block w-100" src="..." alt="Second slide">
              <h1 class="text-center text-light">Openlake Title2</h1>
                <div class="beforeTopBlog">
                  <div class="topBlog">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat, deleniti sequi. Atque optio dolorum consequatur
                      nam sequi nostrum unde doloribus, blanditiis praesentium.
                      Error maiores harum sint maxime tempore quia atque, quae
                      in enim accusantium modi ducimus adipisci esse facilis
                      nostrum dolorum obcaecati blanditiis sed! Commodi minima
                      error perferendis enim ipsam, libero harum id quis
                      exercitationem amet tempora recusandae tenetur magni
                      voluptate tempore ducimus quae facere eveniet consequuntur
                      corporis possimus magnam? Voluptate quae, deleniti debitis
                      omnis illo perspiciatis dolores architecto facere
                      excepturi similique reprehenderit hic corporis veritatis,
                      dolorem, magnam sed sapiente quasi! Tempore nesciunt ex
                      officiis. Molestias et repellat voluptate necessitatibus
                      aspernatur libero ipsa esse quibusdam cum obcaecati
                      labore, explicabo quod asperiores blanditiis cupiditate
                      maiores iure voluptates velit exercitationem? Vitae quis
                      necessitatibus quaerat dolorum, accusantium inventore
                      expedita animi non placeat, incidunt esse ipsa hic
                      perferendis laboriosam iste sit! Voluptatum animi deleniti
                      veniam et ab suscipit laborum repellat delectus, possimus
                      eius optio quibusdam id? Eligendi atque autem perspiciatis
                      alias earum debitis repellat dolorem corporis repellendus?
                      Dicta dolores dolore unde quo in itaque delectus amet
                      quisquam alias voluptas, laudantium nihil. Est beatae
                      possimus tempore sunt distinctio corrupti iusto minima
                      mollitia cum officiis aut, sequi quod, obcaecati aliquid
                      maiores eius error aliquam, modi non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-block w-100" src="..." alt="Third slide">
              <h1 class="text-center text-light">Openlake Title3</h1>
                <div class="beforeTopBlog">
                  <div class="topBlog">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat, deleniti sequi. Atque optio dolorum consequatur
                      nam sequi nostrum unde doloribus, blanditiis praesentium.
                      Error maiores harum sint maxime tempore quia atque, quae
                      in enim accusantium modi ducimus adipisci esse facilis
                      nostrum dolorum obcaecati blanditiis sed! Commodi minima
                      error perferendis enim ipsam, libero harum id quis
                      exercitationem amet tempora recusandae tenetur magni
                      voluptate tempore ducimus quae facere eveniet consequuntur
                      corporis possimus magnam? Voluptate quae, deleniti debitis
                      omnis illo perspiciatis dolores architecto facere
                      excepturi similique reprehenderit hic corporis veritatis,
                      dolorem, magnam sed sapiente quasi! Tempore nesciunt ex
                      officiis. Molestias et repellat voluptate necessitatibus
                      aspernatur libero ipsa esse quibusdam cum obcaecati
                      labore, explicabo quod asperiores blanditiis cupiditate
                      maiores iure voluptates velit exercitationem? Vitae quis
                      necessitatibus quaerat dolorum, accusantium inventore
                      expedita animi non placeat, incidunt esse ipsa hic
                      perferendis laboriosam iste sit! Voluptatum animi deleniti
                      veniam et ab suscipit laborum repellat delectus, possimus
                      eius optio quibusdam id? Eligendi atque autem perspiciatis
                      alias earum debitis repellat dolorem corporis repellendus?
                      Dicta dolores dolore unde quo in itaque delectus amet
                      quisquam alias voluptas, laudantium nihil. Est beatae
                      possimus tempore sunt distinctio corrupti iusto minima
                      mollitia cum officiis aut, sequi quod, obcaecati aliquid
                      maiores eius error aliquam, modi non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="cardbg">
        <div class="ag-format-container">
          <div class="ag-courses_box">
            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">30.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">Blog1</div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">31.10.2022</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
