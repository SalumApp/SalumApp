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
  "Currency": () => import("./currency.svg"),
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
  "Meeting": () => import("./meeting.svg"),
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
  "Weightlifting": () => import("./weightlifiting.svg"),
  "Currency-exchange": () => import("./currency-exchange.svg"),
  "Expense": () => import("./expense.svg"),
  "Income": () => import("./income.svg"),
  "Hide": () => import("./hide.svg"),
  "Show": () => import("./show.svg"),
  "Plus": () => import("./plus.svg"),
  "Line-chart-2": () => import("./line-chart-2.svg"),
  "Bar-chart-3": () => import("./bar-chart-3.svg"),
  "Backspace": () => import("./backspace.svg"),
  "Arrow-right": () => import("./arrow-right.svg"),
  "Onboarding-0": () => import("./onboarding-0.svg"),
  "Onboarding-1": () => import("./onboarding-1.svg"),
  "Onboarding-2": () => import("./onboarding-2.svg"),
  "User": () => import("./user.svg"),
  "Cloud": () => import("./cloudy.svg"),
  "Upload": () => import("./upload.svg"),
  "Download": () => import("./download.svg"),
  "Upload-file": () => import("./upload-file.svg"),
  "Download-file": () => import("./download-file.svg"),
};

export const iconMappingsPicker = {
  // Travel Related Icons
  "Airplane": () => import("./airplane.svg"),
  "Bus": () => import("./bus.svg"),
  "Car": () => import("./car.svg"),
  "Map": () => import("./map.svg"),
  "Train": () => import("./train.svg"),
  "Luggage": () => import("./luggage.svg"),

  // Finance Related Icons
  "Bitcoin": () => import("./bitcoin.svg"),
  "Card": () => import("./card.svg"),
  "Credit-card2": () => import("./credit-card-2.svg"),
  "Donate": () => import("./donate.svg"),
  "Money2": () => import("./money-2.svg"),
  "Money": () => import("./money.svg"),
  "Piggy-bank": () => import("./piggy-bank.svg"),
  "Salary": () => import("./salary.svg"),
  "Wallet": () => import("./wallet.svg"),
  "Currency-exchange": () => import("./currency-exchange.svg"),
  "Expense": () => import("./expense.svg"),
  "Income": () => import("./income.svg"),

  // Sports and Recreation Related Icons
  "Basketball": () => import("./basketball.svg"),
  "Billiard": () => import("./billiard.svg"),
  "Joystick": () => import("./joystick.svg"),
  "Weightlifting": () => import("./weightlifiting.svg"),

  // Daily Items and Actions
  "Apple": () => import("./apple.svg"),
  "Bed": () => import("./bed.svg"),
  "Broom": () => import("./broom.svg"),
  "Chair": () => import("./chair.svg"),
  "Shirt": () => import("./shirt.svg"),
  "Fridge": () => import("./fridge.svg"),
  "Home": () => import("./home.svg"),
  "Lock": () => import("./lock.svg"),
  "Tea": () => import("./tea.svg"),
  "Trash": () => import("./trash.svg"),

  // Technology and Office Related Icons
  "Computer": () => import("./computer.svg"),
  "Connection": () => import("./connection.svg"),
  "File": () => import("./file.svg"),
  "Gallery": () => import("./gallery.svg"),
  "Old-television": () => import("./old-television.svg"),
  "Pen": () => import("./pen.svg"),
  "Call": () => import("./call.svg"),

  // Health and Wellness Related Icons
  "Medical": () => import("./medical.svg"),
  "Pill": () => import("./pill.svg"),

  // Miscellaneous Icons
  "Assets2": () => import("./assets-2.svg"),
  "Assets": () => import("./assets.svg"),
  "Beach": () => import("./beach.svg"),
  "Bone": () => import("./bone.svg"),
  "Books": () => import("./books.svg"),
  "City": () => import("./city.svg"),
  "Cloudy": () => import("./cloudy.svg"),
  "Contact": () => import("./contact.svg"),
  "Coupon": () => import("./coupon.svg"),
  "Camera": () => import("./camera.svg"),
  "Graduation-hat": () => import("./graduation-hat.svg"),
  "Headphone": () => import("./headphone.svg"),
  "Lamp": () => import("./lamp.svg"),
  "Museum": () => import("./museum.svg"),
  "Music": () => import("./music.svg"),
  "Organization": () => import("./organization.svg"),
  "Pie-chart": () => import("./pie-chart.svg"),
  "Presentation-3": () => import("./presentation-3.svg"),
  "Recurring-bill": () => import("./recurring-bill.svg"),
  "Restaurant": () => import("./restaurant.svg"),
  "Settings": () => import("./settings.svg"),
  "Shopping-bag": () => import("./shopping-bag.svg"),
  "Vault": () => import("./vault.svg"),
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
