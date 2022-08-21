import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

import { ItemIcon } from './components/ItemIcon'
import { CardCoffee } from './components/CardCoffee'

import cupCoffeDelivery from '../../assets/images/cup-coffe-delivery.png'
import expressoImg from '../../assets/images/expresso.png'
import expressoAmericanoImg from '../../assets/images/americano.png'
import expressoCremesoImg from '../../assets/images/expresso-cremoso.png'
import expressoGeladoImg from '../../assets/images/cafe-gelado.png'
import cafeLeiteImg from '../../assets/images/cafe-com-leite.png'
import latteImg from '../../assets/images/latte.png'
import capuccinoImg from '../../assets/images/capuccino.png'
import macchiatoImg from '../../assets/images/macchiato.png'
import mochaccinoImg from '../../assets/images/mochaccino.png'
import chocoQuenteImg from '../../assets/images/chocolate-quente.png'
import cubanoImg from '../../assets/images/cubano.png'
import havaianoImg from '../../assets/images/havaiano.png'
import arabeImg from '../../assets/images/arabe.png'
import irlandesImg from '../../assets/images/irlandes.png'

import {
  HomeContainer,
  HeaderContainer,
  BackgroundContainer,
  ContentContainer,
  CupCoffeContainer,
  DescriptionContainer,
  ItemsContainer,
  CoffesContainer,
} from './styles'

const coffees = [
  {
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    imageUrl: expressoImg,
    price: 9.9,
  },
  {
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    imageUrl: expressoAmericanoImg,
    price: 9.9,
  },
  {
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    imageUrl: expressoCremesoImg,
    price: 9.9,
  },
  {
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL'],
    imageUrl: expressoGeladoImg,
    price: 9.9,
  },
  {
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: cafeLeiteImg,
    price: 9.9,
  },
  {
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: latteImg,
    price: 9.9,
  },
  {
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: capuccinoImg,
    price: 9.9,
  },
  {
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: macchiatoImg,
    price: 9.9,
  },
  {
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: mochaccinoImg,
    price: 9.9,
  },
  {
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    imageUrl: chocoQuenteImg,
    price: 9.9,
  },
  {
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    imageUrl: cubanoImg,
    price: 9.9,
  },
  {
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    imageUrl: havaianoImg,
    price: 9.9,
  },
  {
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    imageUrl: arabeImg,
    price: 9.9,
  },
  {
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    imageUrl: irlandesImg,
    price: 9.9,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <BackgroundContainer />
      <HeaderContainer>
        <ContentContainer>
          <DescriptionContainer>
            <span>Encontre o café perfeito para qualquer hora do dia</span>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </DescriptionContainer>
          <ItemsContainer>
            <div className="itemsColumn">
              <ItemIcon
                content="Compra simples e segura"
                color={defaultTheme['yellow-dark']}
              >
                <ShoppingCart size={16} weight="fill" />
              </ItemIcon>
              <ItemIcon
                content="Entrega rápida e rastreada"
                color={defaultTheme.yellow}
              >
                <Timer size={16} weight="fill" />
              </ItemIcon>
            </div>
            <div className="itemsColumn">
              <ItemIcon
                content="Embalagem mantém o café intacto"
                color={defaultTheme['base-text']}
              >
                <Package size={16} weight="fill" />
              </ItemIcon>
              <ItemIcon
                content="O café chega fresquinho até você"
                color={defaultTheme.purple}
              >
                <Coffee size={16} weight="fill" />
              </ItemIcon>
            </div>
          </ItemsContainer>
        </ContentContainer>
        <CupCoffeContainer>
          <img src={cupCoffeDelivery} alt="Cup Coffe" />
        </CupCoffeContainer>
      </HeaderContainer>
      <CoffesContainer>
        <h1>Nossos cafés</h1>
        <div className="coffees-content">
          {coffees.map((coffee) => (
            <CardCoffee
              key={coffee.title}
              imageUrl={coffee.imageUrl}
              title={coffee.title}
              subtitle={coffee.subtitle}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </div>
      </CoffesContainer>
    </HomeContainer>
  )
}
