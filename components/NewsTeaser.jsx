import selectors from '../styles/NewsTeaser.module.scss'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
//? This component also requires the package 'prop-types' to function correctly.
//? https://www.npmjs.com/package/react-responsive-masonry
//? https://stackoverflow.com/questions/43357501/react-prop-types-error

export default function NewsTeaser() {
  return (
    <section className='container' id={selectors.news_teaser}>
      <h2>Latest Updates</h2>
      <hr />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 400: 1, 800: 2, 1000: 3, 1500: 4 }}
      >
        <Masonry gutter='1em'>
          <article>
            <img src='https://source.unsplash.com/random/160x90' />
            <h5>New Video - Jan 12 2021</h5>
            <h3>Interstellar Love Song – A Masterpiece in the Making</h3>
            <p>
              Article Excerpt lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Llorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
          </article>

          <article>
            <img src='https://source.unsplash.com/random/300x300' />
            <h5>New Song - Dec 05 2020</h5>
            <h3>Kelly Come Home</h3>
            <p>
              My fiancee sometimes leaves on these long trips to visit her
              family in the bay. Sometimes she's gone for days, so I wrote this
              song so she'd know how helpless I am without her.
            </p>
          </article>

          <article>
            <img src='https://source.unsplash.com/random/160x200' />
            <h5>Upcoming Show - Nov 11 2020</h5>
            <h3>Michael's Awesome Show</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              provident earum facere quo iste alias? Eaque similique ipsa fugit
              corrupti illo culpa voluptatum mollitia, repellat quisquam id
              officiis optio nihil magnam illum ad a fuga minus animi beatae
              accusantium odit error consectetur nam doloribus. Sapiente vitae,
              error modi quo libero repudiandae nulla facere quia inventore est
              sed. Aliquid, unde quibusdam?
            </p>
          </article>

          <article>
            <img src='https://source.unsplash.com/random/160x90' />

            <h5>New Video - Oct 23 2020</h5>
            <h3>Dream Girl</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              delectus esse nulla ea. Magnam natus architecto voluptatum odit ut
              aspernatur error vel alias quam dolorem quaerat similique cum,
              cumque aliquid reiciendis neque dolores quia eum. Modi neque
              quisquam iusto fuga minus in cum esse reiciendis.
            </p>
          </article>
          <article>
            <img src='https://source.unsplash.com/random/160x200' />
            <h5>Upcoming Show - Nov 11 2020</h5>
            <h3>Michael's Awesome Show</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              provident earum facere quo iste alias? Eaque similique ipsa fugit
              corrupti illo culpa voluptatum mollitia, repellat quisquam id
              officiis optio nihil magnam illum ad a fuga minus animi beatae
              accusantium odit error consectetur nam doloribus. Sapiente vitae,
              error modi quo libero repudiandae nulla facere quia inventore est
              sed. Aliquid, unde quibusdam?
            </p>
          </article>

          <article>
            <img src='https://source.unsplash.com/random/160x90' />
            <h5>New Video - Jan 12 2021</h5>
            <h3>Interstellar Love Song – A Masterpiece in the Making</h3>
            <p>
              Article Excerpt lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Llorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
          </article>

          <article>
            <img src='https://source.unsplash.com/random/160x200' />
            <h5>Upcoming Show - Nov 11 2020</h5>
            <h3>Michael's Awesome Show</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              provident earum facere quo iste alias? Eaque similique ipsa fugit
              corrupti illo culpa voluptatum mollitia, repellat quisquam id
              officiis optio nihil magnam illum ad a fuga minus animi beatae
              accusantium odit error consectetur nam doloribus. Sapiente vitae,
              error modi quo libero repudiandae nulla facere quia inventore est
              sed. Aliquid, unde quibusdam?
            </p>
          </article>

          <article>
            <img src='https://source.unsplash.com/random/160x200' />
            <h5>Upcoming Show - Nov 11 2020</h5>
            <h3>Michael's Awesome Show</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              provident earum facere quo iste alias? Eaque similique ipsa fugit
              corrupti illo culpa voluptatum mollitia, repellat quisquam id
              officiis optio nihil magnam illum ad a fuga minus animi beatae
              accusantium odit error consectetur nam doloribus. Sapiente vitae,
              error modi quo libero repudiandae nulla facere quia inventore est
              sed. Aliquid, unde quibusdam?
            </p>
          </article>
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}
