import React from 'react';
import BlogFeedArticle from './BlogFeedArticle';
import ButtonArrowBottom from '../../../common/components/buttonArrowBottom/ButtonArrowBottom';
import ArticleOneImage from '../../../../assets/images/image-main-page-article-preview-1.png';
import ArticleTwoImage from '../../../../assets/images/image-main-page-article-preview-2.png';
import ArticleThreeImage from '../../../../assets/images/image-main-page-article-preview-3.png';

const BlogFeed: React.FC = () => (
  <section className="blog-feed">
    <div className="layout">
      <BlogFeedArticle
        id="first"
        imageUrl={ArticleOneImage}
        header="Акне та стрес"
        text={
          <p>
            &quot;Досить часто високий рівень кортизолу буває в людей, які не дотримуються
            «біологічного годинника». Природа нам дала режим : «лягай спати об 10-11 вечора, в цей
            час твоє тіло випрацьовує мелатонін - один із щитів захисту твого організму». Тепер
            питання: «о котрій годині лягаєте спати ви?»...
          </p>
        }
      />
      <BlogFeedArticle
        id="second"
        imageUrl={ArticleTwoImage}
        header="Догляд за обличчям"
        text={
          <p>
            Добре відомо що тип шкіри можна поділити на 4 види (є й інші розподіли, наводжу цей, бо
            як на мене він найзрозуміліший): нормальна – в міру суха та зволожена, добре
            збалансована; суха – груба на дотик , шершава, тьмяна; жирна – блищить та має видимі
            розкриті пори&quot;...
          </p>
        }
      />
      <BlogFeedArticle
        id="third"
        imageUrl={ArticleThreeImage}
        header="Звикання до косметики"
        text={
          <>
            <p>
              Медицина говорить про те, що справжнє звикання може бути до антибіотиків та гормонів.
              І то через безконтрольне і неправильне застосування.
            </p>
            <p> Що ховається за тим, що нам здається, що шкіра звикла? </p>
            <p>Результат був, а зараз ні?...</p>
          </>
        }
      />
      <div className="button-show-more">
        <ButtonArrowBottom text="Показати ще" />
      </div>
    </div>
  </section>
);

export default BlogFeed;
