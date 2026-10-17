const subscriptions = [
  { subscriptionId: "SUB_001", customerName: "Nguyen Van An", planTier: "PERSONAL", deviceLimit: 1 },
  { subscriptionId: "SUB_002", customerName: "Tran Thi Mai", planTier: "FAMILY", deviceLimit: 5 },
  { subscriptionId: "SUB_003", customerName: "Le Van Nam", planTier: "PERSONAL", deviceLimit: 1 }
];

function showMenu() {
  console.log("\n===== RIKKEISTREAM =====");
  console.log("1. Them thue bao moi");
  console.log("2. Xem danh sach thue bao");
  console.log("3. Cap nhat goi cuoc");
  console.log("4. Huy thue bao");
  console.log("5. Thoat");
}

function addSubscription() {
  const customerName = prompt("Nhap ten khach hang:");
  if (!customerName || !customerName.trim()) {
    console.log("Ten khong hop le!");
    return;
  }

  const planTier = prompt("Chon goi PERSONAL hoac FAMILY:").toUpperCase();
  if (planTier !== "PERSONAL" && planTier !== "FAMILY") {
    console.log("Goi cuoc khong hop le!");
    return;
  }

  const subscriptionId = "SUB_" + String(subscriptions.length + 1).padStart(3, "0");
  const deviceLimit = planTier === "FAMILY" ? 5 : 1;

  subscriptions.push({
    subscriptionId,
    customerName: customerName.trim(),
    planTier,
    deviceLimit
  });

  console.log("Them thue bao thanh cong!");
}

function listSubscriptions() {
  if (subscriptions.length === 0) {
    console.log("Danh sach thue bao trong.");
    return;
  }

  console.table(subscriptions);
}

function updateSubscription() {
  const id = prompt("Nhap ma thue bao can cap nhat:");
  const sub = subscriptions.find(item => item.subscriptionId === id);

  if (!sub) {
    console.log("Khong tim thay thue bao!");
    return;
  }

  const planTier = prompt("Nhap goi moi PERSONAL hoac FAMILY:").toUpperCase();
  if (planTier !== "PERSONAL" && planTier !== "FAMILY") {
    console.log("Goi cuoc khong hop le!");
    return;
  }

  sub.planTier = planTier;
  sub.deviceLimit = planTier === "FAMILY" ? 5 : 1;
  console.log("Cap nhat thanh cong!");
}

function deleteSubscription() {
  const id = prompt("Nhap ma thue bao can huy:");
  const index = subscriptions.findIndex(item => item.subscriptionId === id);

  if (index === -1) {
    console.log("Khong tim thay thue bao!");
    return;
  }

  subscriptions.splice(index, 1);
  console.log("Huy thue bao thanh cong!");
}

function main() {
  let menuChoice;

  do {
    showMenu();
    menuChoice = Number(prompt("Nhap lua chon tu 1 den 5:"));

    switch (menuChoice) {
      case 1:
        addSubscription();
        break;
      case 2:
        listSubscriptions();
        break;
      case 3:
        updateSubscription();
        break;
      case 4:
        deleteSubscription();
        break;
      case 5:
        console.log("Da thoat chuong trinh!");
        break;
      default:
        console.log("Lua chon khong hop le!");
    }
  } while (menuChoice !== 5);
}

main();