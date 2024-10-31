import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <p>
        {truncateText(
          "ខាងក្រោមនេះ យើងខ្ញុំនឹងបង្ហាញអ្នកពីលាភរបស់ឆ្នាំទាំងឡាយខាងលើនេះ។ តើមានអ្វីខ្លះទៅ?មនុស្សស្រីដែលកើតក្នុងឆ្នាំឆ្លូវ កើតមកមាននិស្ស័យខ្លាំងជាមួយនឹងទ្រព្យធំតែម្តង។ ជាពិសេស គេក៏អាចទទួលបានផលធំពីការបណ្តាក់ទុនផងដែរ។ ដូចនេះ ពេលចាស់ទៅមិនខ្លាចគ្មានប្រាក់ចាយឡើយឆ្នាំថោះនារីដែលកើតក្នុងឆ្នាំថោះ មានចិត្តដែលល្អខ្លាំងណាស់ ដោយតាមជួយអ្នកដទៃជានិច្ច។ ជាហេតុដែលធ្វើឲ្យមានមនុស្សជាច្រើនគោរពស្រឡាញ់។ ដូចនេះ មិនថាជួបនឹងបញ្ហាអ្វីទេគឺអាចដោះស្រាយបានទាំងអស់៕"
        )}
      </p>
    </section>
  );
}
