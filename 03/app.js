import { files } from "./data.js";

class CheckSpace {
  constructor() {
    this.files = files;
  }

  // method that converts all sizes to one format
  convertToBits() {
    const [firstImg, secondImg, thirdImg, fourthImg] = this.files;

    const bits = 1024;

    let secondImgInBits;
    let thirdImgInBits;
    let fourthImgInBits;

    secondImgInBits = secondImg.size.length * bits;
    thirdImgInBits = thirdImg.size.length * Math.pow(bits, 2);
    fourthImgInBits = fourthImg.size.length * Math.pow(bits, 3);

    return [
      firstImg.size.length,
      secondImgInBits,
      thirdImgInBits,
      fourthImgInBits
    ];
  }
  // method is showing total size of images that will take a free space in B, KB, MB and GB
  showSizeTo(formatBytes) {
    let totalSize = 0;

    if (formatBytes.toUpperCase() === "B") {
      for (let i = 0; i < this.convertToBits().length; i++) {
        totalSize += this.convertToBits()[i];
      }
    } else if (formatBytes.toUpperCase() === "KB") {
      let bites = 0;
      for (let i = 0; i < this.convertToBits().length; i++) {
        bites += this.convertToBits()[i];
      }

      totalSize = bites / 1024;
    } else if (formatBytes.toUpperCase() === "MB") {
      let bites = 0;
      for (let i = 0; i < this.convertToBits().length; i++) {
        bites += this.convertToBits()[i];
      }

      totalSize = bites / Math.pow(1024, 2);
    } else if (formatBytes.toUpperCase() === "GB") {
      let bites = 0;
      for (let i = 0; i < this.convertToBits().length; i++) {
        bites += this.convertToBits()[i];
      }

      totalSize = bites / Math.pow(1024, 3);
    }
    return `Suma zajmowanej przestrzeni przez obrazy wynosi ${totalSize}${formatBytes.toUpperCase()} po zaokrągleniu wyniesie ${totalSize.toFixed(
      2
    )}${formatBytes.toUpperCase()}`;
  }
}

const test = new CheckSpace();

console.log(test.showSizeTo("b"));
console.log(test.showSizeTo("kb"));
console.log(test.showSizeTo("gb"));
