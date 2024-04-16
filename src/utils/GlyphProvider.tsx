import Glyph_Airplane from "../assets/Glyph/airplane.svg";
import Glyph_Apple from "../assets/Glyph/apple.svg";
import Glyph_Assets2 from "../assets/Glyph/assets-2.svg";
import Glyph_Assets from "../assets/Glyph/assets.svg";
import Glyph_Basketball from "../assets/Glyph/basketball.svg";
import Glyph_Beach from "../assets/Glyph/beach.svg";
import Glyph_Bed from "../assets/Glyph/bed.svg";
import Glyph_Billiard from "../assets/Glyph/billiard.svg";
import Glyph_Bitcoin from "../assets/Glyph/bitcoin.svg";
import Glyph_Bone from "../assets/Glyph/bone.svg";
import Glyph_Books from "../assets/Glyph/books.svg";
import Glyph_Broom from "../assets/Glyph/broom.svg";
import Glyph_Bus from "../assets/Glyph/bus.svg";
import Glyph_Call from "../assets/Glyph/call.svg";
import Glyph_Car from "../assets/Glyph/car.svg";
import Glyph_Card from "../assets/Glyph/card.svg";
import Glyph_Cart from "../assets/Glyph/cart.svg";
import Glyph_Chair from "../assets/Glyph/chair.svg";
import Glyph_City from "../assets/Glyph/city.svg";
import Glyph_Computer from "../assets/Glyph/computer.svg";
import Glyph_Connection from "../assets/Glyph/connection.svg";
import Glyph_Coupon from "../assets/Glyph/coupon.svg";
import Glyph_Credit_card2 from "../assets/Glyph/credit-card-2.svg";
import Glyph_Donate from "../assets/Glyph/donate.svg";
import Glyph_Fridge from "../assets/Glyph/fridge.svg";
import Glyph_Graduation_hat from "../assets/Glyph/graduation-hat.svg";
import Glyph_Headphone from "../assets/Glyph/headphone.svg";
import Glyph_Home from "../assets/Glyph/home.svg";
import Glyph_Joystick from "../assets/Glyph/joystick.svg";
import Glyph_Lamp from "../assets/Glyph/lamp.svg";
import Glyph_Luggage from "../assets/Glyph/luggage.svg";
import Glyph_Map from "../assets/Glyph/map.svg";
import Glyph_Medical from "../assets/Glyph/medical.svg";
import Glyph_Money2 from "../assets/Glyph/money-2.svg";
import Glyph_Money from "../assets/Glyph/money.svg";
import Glyph_More from "../assets/Glyph/more.svg";
import Glyph_Museum from "../assets/Glyph/museum.svg";
import Glyph_Music from "../assets/Glyph/music.svg";
import Glyph_Old_television from "../assets/Glyph/old-television.svg";
import Glyph_Pen from "../assets/Glyph/pen.svg";
import Glyph_Piggy_bank from "../assets/Glyph/piggy-bank.svg";
import Glyph_Pill from "../assets/Glyph/pill.svg";
import Glyph_Presentation3 from "../assets/Glyph/presentation-3.svg";
import Glyph_Recurring_bill from "../assets/Glyph/recurring-bill.svg";
import Glyph_Restaurant from "../assets/Glyph/restaurant.svg";
import Glyph_Salary from "../assets/Glyph/salary.svg";
import Glyph_Settings from "../assets/Glyph/settings.svg";
import Glyph_Shirt from "../assets/Glyph/shirt.svg";
import Glyph_Shopping_bag from "../assets/Glyph/shopping-bag.svg";
import Glyph_Success from "../assets/Glyph/success.svg";
import Glyph_Tea from "../assets/Glyph/tea.svg";
import Glyph_Train from "../assets/Glyph/train.svg";
import Glyph_Transaction from "../assets/Glyph/transaction.svg";
import Glyph_Trash from "../assets/Glyph/trash.svg";
import Glyph_Vault from "../assets/Glyph/vault.svg";
import Glyph_Wallet from "../assets/Glyph/wallet.svg";
import Glyph_Weightlifiting from "../assets/Glyph/weightlifiting.svg";
import Glyph_Sort from "../assets/Glyph/sort.svg";
import Glyph_Lock from "../assets/Glyph/lock.svg";
import Glyph_Warning from "../assets/Glyph/warning.svg";
import Glyph_Block from "../assets/Glyph/block.svg";
import Glyph_Arrow_down_2 from "../assets/Glyph/arrow-down-2.svg";
import Glyph_Cloudy from "../assets/Glyph/cloudy.svg";
import Glyph_Contact from "../assets/Glyph/contact.svg";
import Glyph_Pie_chart from "../assets/Glyph/pie-chart.svg";
import Glyph_Organization from "../assets/Glyph/organization.svg";
import Glyph_Globe from "../assets/Glyph/globe.svg";

export const getIcon = (
  glyph: string,
  width: number,
  height: number,
  fill: string,
) => {
  let IconComponent: any = null;

  switch (glyph) {
    case "Airplane":
      IconComponent = Glyph_Airplane;
      break;
    case "Apple":
      IconComponent = Glyph_Apple;
      break;
    case "Assets-2":
      IconComponent = Glyph_Assets2;
      break;
    case "Assets":
      IconComponent = Glyph_Assets;
      break;
    case "Basketball":
      IconComponent = Glyph_Basketball;
      break;
    case "Beach":
      IconComponent = Glyph_Beach;
      break;
    case "Bed":
      IconComponent = Glyph_Bed;
      break;
    case "Billiard":
      IconComponent = Glyph_Billiard;
      break;
    case "Bitcoin":
      IconComponent = Glyph_Bitcoin;
      break;
    case "Bone":
      IconComponent = Glyph_Bone;
      break;
    case "Books":
      IconComponent = Glyph_Books;
      break;
    case "Broom":
      IconComponent = Glyph_Broom;
      break;
    case "Bus":
      IconComponent = Glyph_Bus;
      break;
    case "Call":
      IconComponent = Glyph_Call;
      break;
    case "Car":
      IconComponent = Glyph_Car;
      break;
    case "Card":
      IconComponent = Glyph_Card;
      break;
    case "Cart":
      IconComponent = Glyph_Cart;
      break;
    case "Chair":
      IconComponent = Glyph_Chair;
      break;
    case "City":
      IconComponent = Glyph_City;
      break;
    case "Computer":
      IconComponent = Glyph_Computer;
      break;
    case "Connection":
      IconComponent = Glyph_Connection;
      break;
    case "Coupon":
      IconComponent = Glyph_Coupon;
      break;
    case "Credit-card-2":
      IconComponent = Glyph_Credit_card2;
      break;
    case "Donate":
      IconComponent = Glyph_Donate;
      break;
    case "Fridge":
      IconComponent = Glyph_Fridge;
      break;
    case "Graduation-hat":
      IconComponent = Glyph_Graduation_hat;
      break;
    case "Headphone":
      IconComponent = Glyph_Headphone;
      break;
    case "Home":
      IconComponent = Glyph_Home;
      break;
    case "Joystick":
      IconComponent = Glyph_Joystick;
      break;
    case "Lamp":
      IconComponent = Glyph_Lamp;
      break;
    case "Luggage":
      IconComponent = Glyph_Luggage;
      break;
    case "Map":
      IconComponent = Glyph_Map;
      break;
    case "Medical":
      IconComponent = Glyph_Medical;
      break;
    case "Money-2":
      IconComponent = Glyph_Money2;
      break;
    case "Money":
      IconComponent = Glyph_Money;
      break;
    case "More":
      IconComponent = Glyph_More;
      break;
    case "Museum":
      IconComponent = Glyph_Museum;
      break;
    case "Music":
      IconComponent = Glyph_Music;
      break;
    case "Old-television":
      IconComponent = Glyph_Old_television;
      break;
    case "Pen":
      IconComponent = Glyph_Pen;
      break;
    case "Piggy-bank":
      IconComponent = Glyph_Piggy_bank;
      break;
    case "Pill":
      IconComponent = Glyph_Pill;
      break;
    case "Presentation-3":
      IconComponent = Glyph_Presentation3;
      break;
    case "Recurring-bill":
      IconComponent = Glyph_Recurring_bill;
      break;
    case "Restaurant":
      IconComponent = Glyph_Restaurant;
      break;
    case "Salary":
      IconComponent = Glyph_Salary;
      break;
    case "Shirt":
      IconComponent = Glyph_Shirt;
      break;
    case "Shopping-bag":
      IconComponent = Glyph_Shopping_bag;
      break;
    case "Tea":
      IconComponent = Glyph_Tea;
      break;
    case "Train":
      IconComponent = Glyph_Train;
      break;
    case "Transaction":
      IconComponent = Glyph_Transaction;
      break;
    case "Trash":
      IconComponent = Glyph_Trash;
      break;
    case "Vault":
      IconComponent = Glyph_Vault;
      break;
    case "Wallet":
      IconComponent = Glyph_Wallet;
      break;
    case "Weightlifiting":
      IconComponent = Glyph_Weightlifiting;
      break;
    case "Settings":
      IconComponent = Glyph_Settings;
      break;
    case "Success":
      IconComponent = Glyph_Success;
      break;
    case "Sort":
      IconComponent = Glyph_Sort;
      break;
    case "Lock":
      IconComponent = Glyph_Lock;
      break;
    case "Warning":
      IconComponent = Glyph_Warning;
      break;
    case "Block":
      IconComponent = Glyph_Block;
      break;
    case "Arrow-down-2":
      IconComponent = Glyph_Arrow_down_2;
      break;
    case "Cloudy":
      IconComponent = Glyph_Cloudy;
      break;
    case "Contact":
      IconComponent = Glyph_Contact;
      break;
    case "Pie-chart":
      IconComponent = Glyph_Pie_chart;
      break;
    case "Organization":
      IconComponent = Glyph_Organization;
      break;
    case "Globe":
      IconComponent = Glyph_Globe;
      break;
    default:
      IconComponent = Glyph_More;
  }

  return <IconComponent width={width} height={height} fill={fill} />;
};
