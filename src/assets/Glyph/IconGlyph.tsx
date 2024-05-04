/* eslint prettier/prettier: 0 */
import React from "react";

const iconMappings: { [key: string]: () => Promise<typeof import("*.svg")> } = {
  "Arrow-left": () => import("./arrow-left.svg"),
  "Airplane": () => import("./airplane.svg"),
  "Apple": () => import("./apple.svg"),
  "Arrow-down-2": () => import("./arrow-down-2.svg"),
  "Assets2": () => import("./assets-2.svg"),
  "Assets": () => import("./assets.svg"),
  "Attachment": () => import("./attachment.svg"),
  "Basketball": () => import("./basketball.svg"),
  "Beach": () => import("./beach.svg"),
  "Bed": () => import("./bed.svg"),
  "Billiard": () => import("./billiard.svg"),
  "Bitcoin": () => import("./bitcoin.svg"),
  "Block": () => import("./block.svg"),
  "Bone": () => import("./bone.svg"),
  "Books": () => import("./books.svg"),
  "Broom": () => import("./broom.svg"),
  "Bus": () => import("./bus.svg"),
  "Call": () => import("./call.svg"),
  "Car": () => import("./car.svg"),
  "Card": () => import("./card.svg"),
  "Cart": () => import("./cart.svg"),
  "Chair": () => import("./chair.svg"),
  "City": () => import("./city.svg"),
  "Cloudy": () => import("./cloudy.svg"),
  "Computer": () => import("./computer.svg"),
  "Connection": () => import("./connection.svg"),
  "Contact": () => import("./contact.svg"),
  "Coupon": () => import("./coupon.svg"),
  "Camera": () => import("./camera.svg"),
  "Credit-card2": () => import("./credit-card-2.svg"),
  "Checkbox": () => import("./checkbox.svg"),
  "Checkbox-blank": () => import("./checkbox-blank.svg"),
  "Donate": () => import("./donate.svg"),
  "Fridge": () => import("./fridge.svg"),
  "File": () => import("./file.svg"),
  "Globe": () => import("./globe.svg"),
  "Gallery": () => import("./gallery.svg"),
  "Graduation-hat": () => import("./graduation-hat.svg"),
  "Headphone": () => import("./headphone.svg"),
  "Home": () => import("./home.svg"),
  "Joystick": () => import("./joystick.svg"),
  "Lamp": () => import("./lamp.svg"),
  "Lock": () => import("./lock.svg"),
  "Luggage": () => import("./luggage.svg"),
  "Map": () => import("./map.svg"),
  "Medical": () => import("./medical.svg"),
  "Money2": () => import("./money-2.svg"),
  "Money": () => import("./money.svg"),
  "More": () => import("./more.svg"),
  "Museum": () => import("./museum.svg"),
  "Music": () => import("./music.svg"),
  "Old-television": () => import("./old-television.svg"),
  "Organization": () => import("./organization.svg"),
  "Pen": () => import("./pen.svg"),
  "Pie-chart": () => import("./pie-chart.svg"),
  "Piggy-bank": () => import("./piggy-bank.svg"),
  "Pill": () => import("./pill.svg"),
  "Presentation-3": () => import("./presentation-3.svg"),
  "Recurring-bill": () => import("./recurring-bill.svg"),
  "Restaurant": () => import("./restaurant.svg"),
  "Salary": () => import("./salary.svg"),
  "Settings": () => import("./settings.svg"),
  "Shirt": () => import("./shirt.svg"),
  "Shopping-bag": () => import("./shopping-bag.svg"),
  "Sort": () => import("./sort.svg"),
  "Success": () => import("./success.svg"),
  "Tea": () => import("./tea.svg"),
  "Train": () => import("./train.svg"),
  "Transaction": () => import("./transaction.svg"),
  "Trash": () => import("./trash.svg"),
  "Vault": () => import("./vault.svg"),
  "Wallet": () => import("./wallet.svg"),
  "Warning": () => import("./warning.svg"),
  "Weightlifiting": () => import("./weightlifiting.svg"),
  "Currency-exchange": () => import("./currency-exchange.svg"),
  "Expense": () => import("./expense.svg"),
  "Income": () => import("./income.svg"),
  "Hide": () => import("./hide.svg"),
  "Show": () => import("./show.svg"),
};

interface IconProps {
  glyph: string;
  dim: number;
  fill: string;
}

export const IconGlyph: React.FC<IconProps> = ({ glyph, dim, fill }) => {
  const [Icon, setIcon] = React.useState<React.ElementType | null>(null);

  React.useEffect(() => {
    const loadIcon = async () => {
      const iconImport = iconMappings[glyph] || iconMappings["More"];
      const { default: SvgIcon } = await iconImport();
      setIcon(() => SvgIcon);
    };

    loadIcon().then((r) => r);
  }, [glyph]);

  if (!Icon) return null; // or some fallback UI

  return <Icon width={dim} height={dim} fill={fill} />;
};
