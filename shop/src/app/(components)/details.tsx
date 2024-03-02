export const Details = () => {
    return (
        <div className="flex p-3 flex-col justify-center items-center">
            <div>
                <svg className={`w-60 h-60`} viewBox="0 0 114 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.677 90.1107C37.1583 89.2375 35.5566 88.5472 34.884 89.4853C33.5559 91.3379 37.0899 94.2053 37.8366 94.2053C38.4636 94.1168 41.6157 90.9544 40.0311 89.2847C39.33 88.6239 38.0076 89.3496 37.677 90.1107ZM37.8081 93.8985C36.5256 93.3085 33.6015 90.034 35.5281 89.4558C36.8334 89.0605 37.3863 90.7243 37.7454 90.5473C37.7454 90.5473 38.8398 88.7773 39.7689 89.5738C41.1312 90.7597 38.2356 93.6684 37.8081 93.8985ZM46.6545 92.3704C47.424 91.7804 47.2245 90.2936 46.3239 89.3437C44.2776 87.2256 40.9773 89.2729 42.123 92.394C42.2561 92.7446 42.4684 93.057 42.7421 93.3053C43.0157 93.5536 43.3429 93.7305 43.6961 93.8212C44.0493 93.9118 44.4183 93.9137 44.7723 93.8265C45.1264 93.7394 45.4551 93.5658 45.7311 93.3203C46.0275 93.4619 46.968 93.9103 47.1504 94.046C47.595 94.3351 47.2359 93.5386 47.1903 93.456L46.6545 92.3704ZM45.6456 93.0725C44.4486 93.8867 42.9324 93.6625 42.4479 92.2229C41.4789 89.3791 44.3289 87.8392 46.0959 89.562C46.432 89.8846 46.6468 90.32 46.7021 90.7909C46.7574 91.2619 46.6497 91.7379 46.398 92.1344C46.2441 92.3586 46.7457 93.2495 46.8711 93.515C46.6431 93.4029 45.7653 92.9899 45.6456 93.0725ZM73.1595 88.3879C73.1139 88.7537 73.0797 93.4619 73.4103 93.279C74.2796 92.6369 75.0635 91.8791 75.7416 91.0252C76.4997 91.7804 77.4516 92.3468 78.2667 93.1374C78.717 93.5858 78.5118 91.8571 78.2667 88.3171C78.2382 88.0457 73.2051 87.9867 73.1595 88.3879ZM75.6105 90.683C74.898 91.4441 74.2653 92.1462 73.5129 92.8719L73.4787 88.4941C74.9987 88.4941 76.5187 88.4843 78.0387 88.4646C78.0387 89.8511 78.1356 91.2258 78.1926 92.5946C77.9361 92.3586 75.7758 90.506 75.6105 90.683ZM53.979 89.09C52.2006 88.9425 50.1087 88.8009 48.3474 88.8422C48.2448 88.8422 48.2334 88.9838 48.3018 89.0428C48.3702 89.1018 50.103 90.8128 50.1999 90.8777C50.2417 91.9279 50.2417 92.9781 50.1999 94.0283C50.1999 94.223 50.3424 94.2525 50.5134 94.0283C51.8435 92.5925 53.0348 91.0255 54.0702 89.3496C54.0923 89.3301 54.108 89.3041 54.1154 89.275C54.1228 89.246 54.1214 89.2153 54.1115 89.1871C54.1016 89.1589 54.0836 89.1344 54.0599 89.1171C54.0362 89.0998 54.008 89.0903 53.979 89.09ZM50.331 90.6889C50.1486 90.2169 49.1112 89.4794 48.6552 89.1077C49.7952 89.2375 52.0752 89.3142 53.3007 89.3673C52.2799 89.7269 51.2871 90.1667 50.331 90.683V90.6889ZM50.5134 93.6389C50.5458 92.7319 50.5267 91.8237 50.4564 90.919C51.4881 90.5296 52.5141 90.0045 53.5629 89.5974C51.9441 91.8689 50.5134 93.574 50.5134 93.633V93.6389ZM54.2925 38.7158C54.5946 38.7158 54.6003 38.1671 54.2925 38.1612C49.9491 38.1081 45.3492 37.9429 41.0514 38.1199C40.9954 38.1325 40.9453 38.1645 40.9093 38.2107C40.8734 38.2568 40.8538 38.3143 40.8538 38.3736C40.8538 38.4329 40.8734 38.4904 40.9093 38.5366C40.9453 38.5827 40.9954 38.6147 41.0514 38.6273C45.4608 38.8898 49.8802 38.9194 54.2925 38.7158Z" fill="black"/>
                    <path d="M78.4947 69.1008C78.4662 66.7408 78.2553 48.0437 78.1641 44.7397C78.1185 44.545 75.5934 44.6748 75.2628 44.6748C75.183 44.3798 75.0918 44.0848 74.9949 43.778C74.9949 43.6482 75.8898 41.6481 74.0373 41.0817C73.4958 39.7601 71.5749 35.8956 69.8478 36.2201C68.1207 36.5446 64.7976 42.2558 64.068 44.3208C63.7488 44.4482 63.4367 44.594 63.1332 44.7574H55.29C55.1532 44.486 55.005 44.2441 54.8568 43.9786C53.1468 40.3442 47.3841 40.1495 44.6937 42.716C41.6955 45.5775 42.0318 50.3565 44.8704 53.1708C45.4404 53.7313 45.087 54.457 44.3004 53.6723C41.2851 50.7223 40.8804 45.7663 43.6734 42.5331C42.5714 42.2189 41.4011 42.2785 40.3342 42.7032C39.2673 43.128 38.36 43.8955 37.7454 44.8931C36.2862 44.8931 34.8213 44.8931 33.3621 44.958C33.2538 44.958 33.2082 45.1704 33.2082 45.253C33.0714 50.563 33.1569 55.9379 33.1341 61.2361C31.2189 62.5518 31.7604 65.2304 33.1341 66.7821V71.2307C31.8772 74.196 31.4107 77.4556 31.7832 80.6707C32.3532 85.1783 34.7073 87.1607 39.4098 87.497C41.61 87.6504 47.8914 87.4026 52.2063 86.0869C52.7229 86.2637 53.2593 86.3708 53.8023 86.4055C53.6655 87.2374 54.6117 88.0457 55.5123 87.8746C55.5123 88.3702 56.6865 88.9071 57.6441 88.1519C57.5955 88.9631 57.6241 89.7773 57.7296 90.5827C58.0887 91.9515 58.9323 91.1727 59.2914 90.1107C59.6742 88.8917 59.8214 87.6067 59.7246 86.3288C65.8692 86.553 72.2646 86.3701 78.4377 86.3701C78.546 86.3701 78.6942 86.1282 78.6942 86.0456C78.6638 83.0012 78.6315 79.9568 78.5973 76.9124C79.7658 74.576 79.287 71.4785 78.4947 69.1008ZM75.2001 50.2208C76.4199 49.5541 75.6333 46.0908 75.3597 45.0229H77.919C77.8164 52.5336 78.0501 60.6284 78.1356 68.1155C75.9069 62.5282 70.9764 58.0383 66.0402 54.929C66.5589 54.339 66.9864 53.867 66.3936 53.6133C67.0719 52.9466 66.7926 52.2209 66.3252 52.0321C66.5418 51.6486 66.5646 50.9701 66.0402 50.8521C66.1284 50.7159 66.1687 50.5524 66.1542 50.389C66.1396 50.2257 66.0712 50.0725 65.9604 49.9553C66.1086 49.9081 66.5304 49.8019 66.5874 49.6721C67.7958 49.9907 74.1741 50.7754 75.2001 50.2031V50.2208ZM64.0623 50.6102L65.3277 50.1618C66.0972 49.9671 66.0573 50.8757 64.6494 51.5837C64.3359 51.7371 63.9141 51.9377 63.6234 51.6781C64.3017 51.625 64.6209 51.1176 64.0623 50.5925V50.6102ZM65.8806 51.0763C66.7071 51.3418 65.5101 52.7814 64.6608 52.7047C64.2675 52.6693 64.3359 52.3979 64.2903 52.1147C64.9057 51.9242 65.4568 51.5582 65.8806 51.0586V51.0763ZM62.3181 51.3182C62.3181 51.7135 62.5575 52.4628 62.5689 52.6339C62.5671 53.0858 62.5366 53.5372 62.4777 53.985C62.4777 54.1679 62.8026 54.3095 62.8824 53.4658C63.327 54.1148 64.3359 55.3538 65.1624 55.4364C64.239 56.2506 61.9191 56.286 60.8019 55.8435C60.6423 55.0588 60.1578 53.0646 60.3231 52.3389C60.6593 51.4318 61.141 50.59 61.7481 49.8491C62.3181 49.2001 62.6316 49.8491 63.2472 50.3329C63.3213 50.3919 64.068 50.9701 64.068 50.9819C64.068 51.625 63.0648 51.3064 62.6373 51.1412C62.4093 51.0468 62.3067 50.976 62.3181 51.33V51.3182ZM65.0484 53.0351C65.5018 52.9013 65.9015 52.62 66.1884 52.2327C66.3214 52.3311 66.4115 52.4799 66.4392 52.6466C66.467 52.8134 66.4301 52.9848 66.3366 53.1236C65.9148 53.69 64.7349 53.8729 65.0484 53.0174V53.0351ZM74.2881 41.6009C76.095 42.6039 73.3761 46.1852 72.2874 47.1174C71.1685 45.3032 70.348 43.3095 69.8592 41.2174C71.1645 41.2351 73.1481 40.9519 74.2881 41.5832V41.6009ZM68.97 37.2054C68.4798 41.064 71.7801 48.0909 74.1 49.9966C71.25 50.0674 69.1581 49.6662 66.462 49.3476C65.1909 47.9493 64.3416 46.7221 64.2789 44.6807C65.6526 41.8251 66.7185 39.5713 68.97 37.2054ZM63.8799 44.8046C64.0737 46.5746 64.7748 48.4331 66.1599 49.5246L65.5899 49.7429C64.9882 49.8497 64.4093 50.0654 63.8799 50.3801L63.2415 49.8491C62.7342 49.4302 62.4036 48.8461 61.731 49.3771C61.0756 50.0767 60.5432 50.8893 60.1578 51.7784C59.7713 51.9437 59.3678 52.0625 58.9551 52.1324C57.8493 51.0704 57.4446 48.6927 57.5415 47.9375C57.6612 47.7487 63.27 45.1055 63.8856 44.8046H63.8799ZM62.415 45.1114C60.8589 45.8725 59.166 46.6218 57.6669 47.4714C57.4902 47.5658 57.2166 47.7723 57.1767 47.9906C57.0114 49.0054 57.7467 51.861 58.7613 52.3625C59.0691 52.5867 59.7075 52.3625 60.0552 52.215C59.8386 53.2593 60.2718 54.8641 60.4884 55.932C60.249 56.0559 60.7335 57.8672 60.8019 58.1563C59.6619 57.7669 56.7207 57.23 55.6035 57.6961C55.5351 57.2477 55.4439 56.7993 55.3413 56.3627C55.703 56.2026 56.028 55.9654 56.2951 55.6665C56.5623 55.3676 56.7656 55.0138 56.8917 54.6281C57.8265 52.1442 56.5668 47.3593 55.4724 45.1232L62.415 45.1114ZM45.4518 50.9583C45.7539 50.4037 46.4037 50.917 46.8768 50.7754C47.9256 50.4627 46.9452 47.4242 46.5291 46.8106C50.6673 44.2382 52.7478 44.4152 54.7713 44.4506C55.9683 46.8696 57.3648 51.1943 56.6922 53.9555C56.6094 54.3895 56.4296 54.7975 56.1674 55.1468C55.9051 55.4961 55.5676 55.7771 55.1817 55.9674C55.1247 55.9674 54.9423 56.227 54.9651 56.3096C55.2368 57.2867 55.3542 58.3028 55.3128 59.3186C55.1874 60.4986 54.5433 61.7553 53.2608 61.8615C51.3114 62.0267 48.8547 60.5222 48.1308 58.5988C48.1202 57.435 47.9999 56.2751 47.7717 55.1355C47.5038 54.2092 46.7286 53.4599 46.1244 52.7755C45.5202 52.0911 45.1155 51.5778 45.4518 50.9583ZM33.516 45.2353C34.8555 45.2825 36.2064 45.2353 37.5459 45.2353C36.9759 46.5628 37.4091 47.3652 38.0703 48.5157C38.8854 49.9258 38.703 50.9229 37.1241 51.4185C34.6446 52.215 32.7066 53.7372 34.9638 56.3863C35.7333 57.3008 36.8847 58.5044 35.7846 59.6903C35.1576 60.357 34.2399 60.5812 33.4533 61.006C33.4761 57.0117 33.516 49.6721 33.516 45.2353ZM33.4077 67.1184L34.6845 68.145C34.1893 68.9294 33.7493 69.7496 33.3678 70.5994C33.4077 69.4194 33.4134 68.2807 33.4134 67.1184H33.4077ZM59.0007 89.8157C58.7784 90.5414 58.1058 91.7332 57.9804 90.0989C57.9804 89.7921 57.9804 88.0339 57.8322 87.9395C58.1343 87.6209 58.6416 86.6651 58.4022 86.2993C58.3894 86.2822 58.373 86.2683 58.3542 86.2587C58.3355 86.2492 58.3148 86.2442 58.2939 86.2442C58.273 86.2442 58.2523 86.2492 58.2336 86.2587C58.2148 86.2683 58.1984 86.2822 58.1856 86.2993C58.0032 86.494 58.1343 87.3377 57.3192 87.9159C56.886 88.2168 56.0253 88.323 55.7061 87.792C56.0134 87.6642 56.2888 87.4662 56.5118 87.2129C56.7349 86.9595 56.8998 86.6573 56.9943 86.3288C57.0399 86.0338 56.8119 86.0456 56.7492 86.1459C56.5326 86.4586 56.2875 87.4321 55.3242 87.5265C54.5547 87.6032 54.2184 87.0604 54.0075 86.4114C55.5693 86.5117 55.6719 85.8214 55.3869 85.8214C54.9383 86.0355 54.4396 86.1113 53.9505 86.0397C53.3805 86.0043 52.8105 85.8922 52.2405 85.8214C52.3602 84.1871 52.7022 80.5763 57.171 81.1014C59.4567 82.9953 59.85 87.0958 59.0007 89.8157ZM59.166 83.3257C59.8556 83.6799 60.6374 83.7937 61.3947 83.6502C62.1699 84.2992 60.42 84.9895 59.5365 84.7181C59.4528 84.2423 59.3249 83.776 59.1546 83.3257H59.166ZM59.6961 86.0515C59.6961 85.7329 59.6448 85.4143 59.5992 85.0957C61.8792 85.2137 62.2782 83.5971 61.4403 83.4024C60.9672 83.2903 60.5055 83.5322 59.4225 83.0956C58.8924 82.8714 59.0406 82.9304 58.7784 82.4525C56.7606 78.7709 49.0029 75.7796 45.2352 75.166C45.6685 73.29 45.9074 71.3715 45.9477 69.443C45.9477 69.3014 45.7482 69.2719 45.7311 69.4135C45.5711 71.3233 45.2758 73.2184 44.8476 75.0834C43.8644 74.9479 42.8751 74.8652 41.8836 74.8356C41.7696 74.8356 41.7582 75.1483 41.8836 75.1542C47.2299 75.4829 52.3731 77.3912 56.7036 80.653C53.7453 80.417 51.8871 82.8006 52.0125 85.7624C47.7489 87.0014 42.4251 87.6268 37.9734 86.9778C34.4622 86.4704 32.4501 84.2107 32.0568 80.6235C31.0878 72.0272 36.423 62.54 47.7774 58.41C48.0966 60.6461 51.2544 62.3925 53.2665 62.2273C55.2786 62.0621 55.8201 59.6962 55.6206 57.938C57.3967 57.755 59.1902 57.9559 60.8874 58.528C61.3029 60.1112 61.876 61.6456 62.5974 63.1064C62.187 62.6167 61.2465 61.596 60.7278 61.0296C60.4485 60.7287 60.1008 60.9175 60.4542 61.3187C62.5274 63.5739 64.3918 66.0253 66.0231 68.6406C69.0439 73.9273 70.8952 79.8413 71.4438 85.9571C67.5678 85.9571 63.5607 85.8568 59.6847 86.0102L59.6961 86.0515ZM71.82 85.9984C71.649 84.0106 71.3366 82.0386 70.8852 80.0984C73.473 80.0453 76.5852 79.8388 78.2268 77.467C78.261 80.3069 78.2933 83.1467 78.3237 85.9866L71.82 85.9984ZM77.9076 77.29C76.2717 79.5615 73.302 79.65 70.8054 79.7149C69.3747 73.75 67.0662 69.266 63.6177 64.3749C62.9337 63.3365 60.4029 56.8583 60.7107 56.0677C62.871 56.7875 64.9515 56.3037 65.8407 55.0706C71.5065 59.2006 77.0697 63.5902 78.6429 71.0655C79.059 73.0951 79.1616 75.5318 77.8905 77.2841L77.9076 77.29ZM93.48 57.6017C93.0183 59.5723 95.874 59.8555 96.1932 58.2566C96.5865 56.3627 93.9132 55.8553 93.48 57.6017ZM23.37 67.1479C21.09 68.1273 18.6903 69.1303 16.3932 69.9799L18.2685 73.16C19.9785 72.0154 21.6372 70.8 23.3415 69.7262C23.3187 68.853 23.37 68.0034 23.37 67.1479ZM89.1651 50.5689C88.2873 49.0526 86.127 50.2739 86.7312 51.7489C87.5463 53.69 90.06 52.1265 89.1651 50.5689Z" fill="black"/>
                    <path d="M55.1361 46.8932C55.0586 46.8459 54.9723 46.8159 54.8828 46.8052C54.7934 46.7945 54.7028 46.8034 54.6168 46.8312C54.5309 46.859 54.4516 46.9051 54.3839 46.9666C54.3163 47.0281 54.2618 47.1036 54.2241 47.1882C54.1386 47.4419 54.5034 47.5894 54.6402 47.3947C54.7012 47.334 54.7761 47.2903 54.8578 47.2676C54.9395 47.2449 55.0254 47.244 55.1076 47.2649C55.29 47.2649 55.3413 47.023 55.1361 46.8932ZM50.1885 45.8489C49.8825 46.0062 49.6304 46.2568 49.4663 46.567C49.3022 46.8771 49.234 47.2319 49.2708 47.5835C49.2789 47.633 49.3036 47.678 49.3407 47.7104C49.3777 47.7428 49.4246 47.7606 49.4732 47.7606C49.5217 47.7606 49.5686 47.7428 49.6057 47.7104C49.6427 47.678 49.6674 47.633 49.6755 47.5835C49.6846 47.3336 49.7601 47.0912 49.8939 46.8829C50.0277 46.6747 50.2145 46.5088 50.4336 46.4035C51.0321 46.1439 50.6901 45.6424 50.1885 45.8489ZM35.6307 35.5829C32.547 35.8897 31.9143 40.4799 34.9011 41.5891C35.3271 41.7571 35.7843 41.8227 36.2383 41.781C36.6924 41.7393 37.1313 41.5914 37.5221 41.3485C37.9128 41.1056 38.2451 40.7739 38.494 40.3786C38.7428 39.9833 38.9017 39.5347 38.9585 39.0666C39.0154 38.5985 38.9688 38.1231 38.8222 37.6764C38.6757 37.2296 38.433 36.8231 38.1125 36.4876C37.792 36.1522 37.4021 35.8964 36.9722 35.7397C36.5423 35.5829 36.0836 35.5293 35.6307 35.5829ZM35.112 41.1643C34.5957 40.9814 34.1508 40.63 33.8441 40.1629C33.5373 39.6958 33.3854 39.1383 33.4111 38.5741C33.4368 38.0099 33.6388 37.4696 33.9866 37.0345C34.3345 36.5993 34.8094 36.2929 35.34 36.1611C37.563 35.6124 39.4269 38.2851 37.9164 40.238C37.5963 40.6704 37.156 40.9909 36.6546 41.1566C36.1532 41.3222 35.6149 41.3249 35.112 41.1643ZM53.9391 45.43C54.112 45.4118 54.2866 45.4348 54.4496 45.4972C54.6126 45.5596 54.7597 45.6597 54.8796 45.7899C54.9117 45.8245 54.955 45.8456 55.0012 45.8492C55.0474 45.8528 55.0932 45.8386 55.13 45.8094C55.1667 45.7801 55.1917 45.7379 55.2002 45.6907C55.2087 45.6436 55.2001 45.5949 55.176 45.5539C54.7086 44.7869 53.5857 44.722 53.4261 45.1173C53.4036 45.1522 53.3915 45.1933 53.3915 45.2353C53.3915 45.2773 53.4036 45.3184 53.4261 45.3533C53.5287 45.4831 53.7453 45.4654 53.9391 45.43ZM51.7161 48.0968C52.1151 47.9965 51.8472 47.4478 51.2544 47.6307C51.0183 47.6902 50.8138 47.8426 50.6844 48.0555C50.5704 48.3033 50.8782 48.4744 51.0036 48.3033C51.2544 47.9788 51.4938 48.1499 51.7161 48.0968ZM54.4578 50.9524C52.9131 50.9524 52.3203 50.858 51.6078 50.091C51.528 50.0025 51.2658 49.9789 51.1233 50.2739C50.9754 50.7272 50.9287 51.2093 50.9865 51.684C51.1746 54.0735 54.8625 53.6723 54.8112 51.1884C54.834 50.9583 54.5718 50.9583 54.4578 50.9524ZM54.3609 51.4244C54.2767 51.8655 54.0277 52.2543 53.6679 52.5062C53.3082 52.7581 52.8669 52.8528 52.44 52.7696C51.7845 52.6044 51.3 51.9377 51.5223 50.6928C51.9224 51.0084 52.3805 51.2361 52.8687 51.3619C53.3568 51.4877 53.8646 51.509 54.3609 51.4244ZM53.6826 47.0407C53.6477 47.0044 53.601 46.9828 53.5516 46.9801C53.5021 46.9775 53.4535 46.9939 53.4152 47.0263C53.3768 47.0586 53.3514 47.1046 53.344 47.1552C53.3365 47.2059 53.3475 47.2576 53.3748 47.3003C53.6872 47.734 53.9765 48.185 54.2412 48.6514C54.3951 48.8874 54.4578 49.0349 54.435 49.0821C54.4122 49.1293 54.1842 49.3063 54.0816 49.4715C54.0546 49.5272 54.0474 49.591 54.0613 49.6516C54.0752 49.7123 54.1092 49.766 54.1575 49.8032C54.2057 49.8405 54.2651 49.859 54.3252 49.8556C54.3853 49.8521 54.4424 49.8268 54.4863 49.7842C54.9309 49.2709 55.1703 49.2473 54.7086 48.4685C54.4165 47.9562 54.0726 47.4776 53.6826 47.0407ZM3.4998 62.3807C4.4004 62.7406 5.2497 63.1182 6.1104 63.3896C6.4239 63.484 6.5778 62.9235 6.27 62.7996C5.37178 62.3412 4.44432 61.9469 3.4941 61.6196C3.0951 61.6255 2.9184 62.1506 3.4998 62.3807ZM9.0345 82.2696C8.094 82.9835 7.2333 83.6502 6.555 84.1989C6.1845 84.4939 6.6348 85.0839 7.011 84.7889C7.7349 84.1989 8.5785 83.5145 9.4392 82.7888C9.49386 82.7298 9.52587 82.6521 9.52924 82.5704C9.5326 82.4887 9.5071 82.4086 9.45749 82.3449C9.40789 82.2813 9.33758 82.2385 9.25973 82.2247C9.18187 82.2108 9.10181 82.2268 9.0345 82.2696ZM11.4627 52.0262C10.9839 51.094 10.2885 51.4716 10.83 52.3743C11.172 52.9643 12.6027 55.5662 12.9675 56.05C13.1841 56.3332 13.5831 56.05 13.4634 55.7196C13.2468 55.165 11.7762 52.6339 11.4627 52.0262ZM21.3351 49.9671C21.2968 49.8973 21.2381 49.842 21.1674 49.8091C21.0966 49.7762 21.0176 49.7675 20.9418 49.7842C20.8164 49.8196 20.6739 49.9671 20.7138 50.4627C20.7879 51.5601 20.8905 52.6988 21.0102 53.8611C21.0296 53.9233 21.0678 53.9775 21.119 54.0157C21.1703 54.0539 21.232 54.0742 21.2952 54.0735C21.3676 54.0716 21.4369 54.0433 21.4911 53.9936C21.5453 53.944 21.5809 53.8762 21.5916 53.8021C21.5753 52.5198 21.4897 51.2395 21.3351 49.9671ZM19.2432 86.73C19.1634 87.0604 19.0209 89.0546 18.9183 89.8157C18.8699 90.0978 18.8796 90.3873 18.9468 90.6653C19.0437 90.9544 19.2546 90.9603 19.3857 90.7597C19.5436 90.4183 19.631 90.0465 19.6422 89.6682C19.7106 88.7183 19.779 87.7625 19.836 86.7949C19.8318 86.7209 19.8024 86.6509 19.753 86.5973C19.7036 86.5437 19.6374 86.51 19.5662 86.5022C19.495 86.4944 19.4235 86.513 19.3643 86.5548C19.3052 86.5965 19.2622 86.6586 19.2432 86.73ZM6.1731 73.2957C5.19281 73.2061 4.20495 73.2838 3.249 73.5258C2.5764 73.6733 2.679 74.2928 3.1692 74.2928C4.14926 74.0803 5.14429 73.9501 6.1446 73.9034C6.21631 73.8973 6.28344 73.8645 6.33347 73.8109C6.3835 73.7574 6.41301 73.6869 6.4165 73.6125C6.41999 73.5381 6.39722 73.4649 6.35243 73.4067C6.30765 73.3484 6.24391 73.3089 6.1731 73.2957ZM110.768 63.1654C109.855 62.6795 108.917 62.2462 107.958 61.8674C107.897 61.8793 107.841 61.9093 107.796 61.9539C107.751 61.9984 107.72 62.0554 107.706 62.118C107.692 62.1806 107.696 62.2461 107.718 62.3064C107.739 62.3666 107.777 62.4191 107.827 62.4574C108.671 62.9176 109.537 63.3424 110.443 63.7849C111.35 64.2274 111.572 63.5548 110.768 63.1654ZM100.77 71.862C100.639 71.6496 100.2 71.803 100.263 72.157C100.798 73.1081 101.274 74.0934 101.688 75.107C101.973 75.8386 102.668 75.5731 102.309 74.753C101.88 73.744 101.365 72.7766 100.77 71.862ZM93.6339 33.4235C93.2178 33.4235 93.2292 34.1787 93.1893 34.6035C93.0868 35.5716 93.0753 36.5477 93.1551 37.5181C93.1562 37.5799 93.1749 37.6399 93.2088 37.6907C93.2428 37.7414 93.2906 37.7806 93.346 37.8033C93.4015 37.8261 93.4622 37.8313 93.5206 37.8183C93.5789 37.8053 93.6322 37.7748 93.6738 37.7305C93.7821 37.6184 93.765 37.5476 93.7935 36.6331C93.8004 35.8832 93.8518 35.1345 93.9474 34.3911C93.9816 34.1315 94.0443 33.748 93.8847 33.5592C93.8568 33.5171 93.8193 33.4827 93.7756 33.4591C93.7319 33.4354 93.6832 33.4232 93.6339 33.4235ZM89.4558 74.5583L89.1594 77.7797C89.1081 78.2458 89.8206 78.293 89.8491 77.821C89.9175 76.7472 89.9859 75.6734 90.0543 74.5819C90.0474 74.5064 90.0143 74.4361 89.9611 74.3841C89.9079 74.332 89.8382 74.3017 89.765 74.2988C89.6919 74.2959 89.6202 74.3206 89.5633 74.3684C89.5064 74.4161 89.4682 74.4836 89.4558 74.5583ZM107.73 50.0674C108.568 49.973 109.486 49.8491 110.614 49.6839C110.693 49.6581 110.76 49.6046 110.805 49.5327C110.85 49.4608 110.868 49.375 110.858 49.2901C110.848 49.2053 110.81 49.1269 110.749 49.0684C110.689 49.0099 110.611 48.9751 110.529 48.97C110.318 48.97 108.135 49.3653 107.65 49.442C107.611 49.4474 107.572 49.4609 107.538 49.4816C107.503 49.5023 107.473 49.5299 107.448 49.5628C107.399 49.6292 107.377 49.7131 107.388 49.796C107.399 49.8789 107.441 49.9541 107.505 50.005C107.569 50.0559 107.65 50.0784 107.73 50.0674ZM105.541 39.3648C104.891 40.2085 104.23 41.0522 103.575 41.8959C103.33 42.2086 103.797 42.5803 104.048 42.2794L106.094 39.8132C106.391 39.4415 105.815 39.0226 105.541 39.3648ZM19.6251 74.753C18.9582 74.3931 18.1374 75.343 19.0551 76.0451C19.722 76.4817 20.4858 75.2191 19.6251 74.753ZM23.94 73.2485C23.9482 73.3464 23.9751 73.4417 24.0192 73.5288C24.0632 73.6159 24.1235 73.6931 24.1965 73.7559C24.3076 73.8513 24.4433 73.9107 24.5868 73.9268C24.7303 73.9429 24.8752 73.9149 25.0035 73.8463C25.1317 73.7778 25.2376 73.6717 25.308 73.5412C25.3784 73.4108 25.4101 73.2618 25.3992 73.1128C25.3937 73.0179 25.3684 72.9253 25.3251 72.8414C25.273 72.6513 25.15 72.4904 24.9832 72.3941C24.8165 72.2979 24.6196 72.2741 24.4359 72.3281C24.2522 72.3821 24.0968 72.5094 24.0038 72.682C23.9108 72.8546 23.8878 73.0584 23.94 73.2485Z" fill="black"/>
                    <path d="M105.057 54.2387C104.051 53.3928 103 52.6049 101.91 51.8787C102.053 51.3654 102.931 47.2 102.931 46.8578C102.931 46.5156 98.6898 46.1557 98.1996 46.1321C97.6418 44.7929 97.2363 43.3911 96.9912 41.9549C96.8772 41.2233 93.3717 43.8075 93.0468 44.0907C91.7985 43.1054 90.4077 41.8841 89.1024 41.0345C88.8231 40.8516 86.6229 44.7043 86.3892 45.1645L83.3625 45.0996C83.3055 40.3796 83.3625 35.577 83.2029 30.8983C82.9806 24.2313 80.3871 23.1811 74.8923 23.1811C62.4891 23.1811 49.8408 23.0808 37.3122 23.2165C30.894 23.2873 28.1181 23.8478 28.0725 31.4352C28.0098 41.7602 28.2036 52.1265 28.2606 62.3276C21.9906 55.5544 10.6818 59.1652 9.25681 68.5049C8.99544 70.1329 9.07062 71.7998 9.47739 73.3955C9.88417 74.9912 10.6133 76.4794 11.6166 77.762C12.6218 79.0308 13.8769 80.063 15.2981 80.79C16.7192 81.5169 18.2738 81.9218 19.8581 81.9776C21.4424 82.0335 23.02 81.739 24.4856 81.1138C25.9513 80.4886 27.2712 79.547 28.3575 78.352C28.4107 83.6974 28.4582 89.0389 28.5 94.3764C28.5 94.5121 28.728 94.518 28.728 94.3764C28.7622 88.9012 28.728 83.4201 28.728 77.9508C33.4134 71.4136 30.6432 65.431 28.6425 62.7288C28.5912 52.2799 28.6425 41.7543 28.4601 31.3113C46.4664 31.7125 64.8147 31.2759 82.8552 31.2405L83.0091 45.0701C82.4847 45.0701 81.5442 45.0701 81.5955 45.371C81.9204 47.0289 82.1655 48.7045 82.4619 50.3624C81.7893 50.6751 79.2186 51.8138 79.3098 52.274C79.8099 53.7232 80.4678 55.1088 81.2706 56.404C80.5868 57.63 79.9776 58.899 79.4466 60.2036C79.344 60.5222 82.7469 60.8408 83.1459 60.8998C83.049 62.186 82.8666 63.8085 82.8951 65.0298C82.8951 65.2245 83.1117 65.2186 83.2485 65.2009C83.3568 75.0362 83.448 84.8597 83.6361 94.7009C83.6361 94.8779 83.8869 94.8484 83.8869 94.7009C83.8869 84.8656 83.7216 75.0244 83.6076 65.2009C84.6222 65.0829 85.7166 64.9 86.7198 64.8233C87.2556 66.0564 88.293 68.2394 88.7433 68.2689C89.0397 68.2689 92.1063 65.4959 92.34 65.3189C92.3799 65.4251 96.1932 67.5373 96.9399 67.8736C97.3617 68.0683 98.2623 63.8911 98.4048 63.3483C98.7924 63.3483 103.028 62.9294 102.919 62.5695C102.349 60.7995 102.178 59.1003 101.722 57.4542C102.059 57.1356 105.268 54.4452 105.057 54.2387ZM25.3308 74.4698C25.0307 74.639 24.6808 74.6875 24.3483 74.6058C24.0158 74.5241 23.7242 74.3181 23.5296 74.0273C22.6347 74.4049 21.6942 74.8533 20.7366 75.2073C20.7579 75.4427 20.7243 75.68 20.6388 75.8993C20.5534 76.1185 20.4184 76.3134 20.2452 76.4676C20.0721 76.6218 19.8658 76.7309 19.6436 76.7857C19.4213 76.8404 19.1897 76.8393 18.968 76.7825C18.7462 76.7256 18.5409 76.6146 18.3691 76.4587C18.1973 76.3029 18.0641 76.1067 17.9805 75.8867C17.897 75.6666 17.8656 75.429 17.8889 75.1938C17.9122 74.9586 17.9896 74.7326 18.1146 74.5347C17.1513 73.3547 15.2646 69.8147 14.478 68.1391L12.2664 67.8913C12.2069 67.8828 12.1496 67.8622 12.0978 67.8308C12.0459 67.7993 12.0006 67.7576 11.9643 67.708C11.9281 67.6585 11.9016 67.602 11.8865 67.5418C11.8713 67.4816 11.8677 67.419 11.876 67.3574C11.8842 67.2958 11.9041 67.2365 11.9344 67.1828C11.9648 67.1292 12.0051 67.0822 12.053 67.0447C12.1009 67.0072 12.1555 66.9798 12.2136 66.9641C12.2718 66.9484 12.3323 66.9447 12.3918 66.9532C13.2867 67.0004 14.9112 66.9532 15.0879 67.319L16.1367 69.2011C18.5193 68.1037 21.147 67.0004 23.5467 66.0918C23.6166 66.0666 23.6908 66.0568 23.7646 66.0631C23.8383 66.0694 23.91 66.0916 23.9749 66.1283C24.0399 66.1649 24.0967 66.2153 24.1418 66.2761C24.1868 66.3369 24.219 66.4067 24.2364 66.4812C24.2574 67.7027 24.206 68.9243 24.0825 70.1392C23.997 70.4814 19.6593 73.2544 18.8499 73.7677L18.9411 73.927C19.1841 73.8586 19.4405 73.8592 19.6832 73.9288C19.9259 73.9983 20.1461 74.1343 20.3205 74.3223C21.2211 73.868 22.1331 73.4904 23.1705 73.0361C23.1683 72.8215 23.2103 72.6088 23.2937 72.4122C23.3771 72.2157 23.5 72.0398 23.6543 71.8963C23.8086 71.7529 23.9906 71.6451 24.1883 71.5801C24.386 71.5152 24.5947 71.4946 24.8007 71.5198C25.1307 71.5452 25.4434 71.6829 25.6899 71.9115C25.9364 72.1401 26.1029 72.4467 26.1634 72.7835C26.2239 73.1203 26.175 73.4683 26.0244 73.7734C25.8738 74.0784 25.63 74.3233 25.3308 74.4698ZM55.0734 27.0515C55.0734 25.5411 57.3249 25.2107 57.741 26.6975C58.3509 28.851 55.0677 29.2876 55.0734 27.0515ZM85.9788 52.2209C84.7704 49.6662 88.5381 47.5599 89.9232 50.1795C91.3083 52.7991 87.2898 54.9821 85.9788 52.2209ZM88.6293 59.1652C88.293 59.6608 87.5292 59.2124 87.8427 58.6814C89.6667 55.6075 92.055 51.6545 94.3578 48.3918C94.734 47.8549 95.5662 48.3387 95.2299 48.9287C93.3375 52.2268 90.8295 55.9556 88.6293 59.1652ZM97.0368 58.5752C96.3129 61.3128 91.9638 60.4809 92.6535 57.3952C93.2976 54.4098 97.8519 55.4895 97.0368 58.5752Z" fill="black"/>
                </svg>
            </div>
            <div className="mobile-big:text-lg">
                Ultima chance de aproveitar nossos descontos! 
                Não perca essa chance única. Somente hoje frete grátis 
                para  todo o Brasil! 
            </div>
        </div>
    )
}