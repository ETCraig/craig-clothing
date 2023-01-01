import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <TitleContainer>
      <Link to={title} className='title'>{title.toUpperCase()}</Link>
    </TitleContainer>
    <PreviewContainer>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </PreviewContainer>
  </CategoryPreviewContainer>
);

export default CategoryPreview;