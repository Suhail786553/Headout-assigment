// components/PartnersSection.jsx
"use client"
import React from "react";
import Marquee from "react-fast-marquee";
import { useRef, useState, useEffect } from "react";
import { ChevronRight,ChevronLeft  } from "react-feather";

const logosTop = [
  "https://cdn-imgix-open.headout.com/partner-images/empire-state-building.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
  "https://cdn-imgix-open.headout.com/partner-images/mvsei-vaticani.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/at-the-top.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
   "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/ain-dubai.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/motf.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
   "https://cdn-imgix-open.headout.com/partner-images/yas-waterworld.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
  "https://cdn-imgix-open.headout.com/partner-images/sydney-opera-house.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/big-bus.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
   "https://cdn-imgix-open.headout.com/partner-images/merlin-entertainments.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
];

const logosBottom = [
"https://cdn-imgix-open.headout.com/partner-images/empire-state-building.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
  "https://cdn-imgix-open.headout.com/partner-images/mvsei-vaticani.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/at-the-top.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
   "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/ain-dubai.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/motf.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
   "https://cdn-imgix-open.headout.com/partner-images/yas-waterworld.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
  "https://cdn-imgix-open.headout.com/partner-images/sydney-opera-house.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
   "https://cdn-imgix-open.headout.com/partner-images/big-bus.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", 
   "https://cdn-imgix-open.headout.com/partner-images/merlin-entertainments.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
  ];

  const Ticketicon=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Tickets" aria-hidden="false" width="18" height="18"><path d="M5.99979 3.99961L11.6737 9.65745" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.99862 6.67747L2.64457 6.32442L2.99862 6.67747ZM6.65958 3.00609L7.01363 3.35914L6.65958 3.00609ZM3.02932 10.6787L3.32586 11.0813L3.02932 10.6787ZM5.33878 12.9812L5.74224 13.2766L5.33878 12.9812ZM12.9706 5.32834L13.2671 5.73088L12.9706 5.32834ZM10.6609 3.02597L10.2574 2.73067L10.6609 3.02597ZM1.08745 8.67992C1.08808 9.12606 1.275 9.49559 1.54511 9.84857C1.80639 10.19 2.18926 10.5703 2.65126 11.031L3.35736 10.3229C2.87534 9.84222 2.5502 9.5165 2.33926 9.24085C2.13715 8.97673 2.08764 8.81808 2.08745 8.6785L1.08745 8.67992ZM2.64457 6.32442C2.18388 6.78642 1.80209 7.16779 1.54178 7.50999C1.27268 7.86373 1.08681 8.23379 1.08745 8.67992L2.08745 8.6785C2.08725 8.53893 2.1363 8.38013 2.33766 8.11544C2.54781 7.83919 2.87203 7.51254 3.35268 7.03052L2.64457 6.32442ZM6.30552 2.65304L2.64457 6.32442L3.35268 7.03052L7.01363 3.35914L6.30552 2.65304ZM8.65658 1.08922C8.21045 1.08985 7.84092 1.27677 7.48794 1.54688C7.14649 1.80816 6.76621 2.19103 6.30552 2.65304L7.01363 3.35914C7.49428 2.87712 7.82001 2.55197 8.09565 2.34104C8.35977 2.13892 8.51843 2.08942 8.65801 2.08922L8.65658 1.08922ZM11.0121 2.64634C10.5501 2.18565 10.1687 1.80387 9.82652 1.54355C9.47278 1.27445 9.10272 1.08859 8.65658 1.08922L8.65801 2.08922C8.79758 2.08902 8.95638 2.13807 9.22107 2.33943C9.49732 2.54958 9.82397 2.8738 10.306 3.35445L11.0121 2.64634ZM11.1817 4.81291C10.7747 4.40707 10.7351 3.77122 11.0644 3.32128L10.2574 2.73067C9.64096 3.57297 9.71371 4.76125 10.4756 5.52102L11.1817 4.81291ZM12.674 4.92579C12.225 5.25661 11.5888 5.21884 11.1817 4.81291L10.4756 5.52102C11.2377 6.28095 12.4266 6.35019 13.2671 5.73088L12.674 4.92579ZM14.9122 7.3271C14.9116 6.88097 14.7247 6.51143 14.4546 6.15846C14.1933 5.81701 13.8104 5.43673 13.3484 4.97604L12.6423 5.68415C13.1243 6.1648 13.4495 6.49052 13.6604 6.76617C13.8625 7.03029 13.912 7.18895 13.9122 7.32852L14.9122 7.3271ZM13.3551 9.6826C13.8158 9.2206 14.1976 8.83923 14.4579 8.49704C14.727 8.14329 14.9129 7.77323 14.9122 7.3271L13.9122 7.32852C13.9124 7.4681 13.8634 7.62689 13.662 7.89159C13.4519 8.16783 13.1277 8.49448 12.647 8.9765L13.3551 9.6826ZM9.69416 13.354L13.3551 9.6826L12.647 8.9765L8.98605 12.6479L9.69416 13.354ZM7.3431 14.9178C7.78923 14.9172 8.15877 14.7303 8.51174 14.4601C8.85319 14.1989 9.23347 13.816 9.69416 13.354L8.98605 12.6479C8.5054 13.1299 8.17968 13.4551 7.90403 13.666C7.63991 13.8681 7.48125 13.9176 7.34168 13.9178L7.3431 14.9178ZM4.9876 13.3607C5.4496 13.8214 5.83097 14.2032 6.17316 14.4635C6.52691 14.7326 6.89697 14.9184 7.3431 14.9178L7.34168 13.9178C7.2021 13.918 7.04331 13.8689 6.77861 13.6676C6.50237 13.4574 6.17572 13.1332 5.6937 12.6526L4.9876 13.3607ZM4.818 11.1942C5.22502 11.6001 5.26466 12.236 4.93531 12.6859L5.74224 13.2766C6.3588 12.4342 6.28606 11.2459 5.5241 10.4861L4.818 11.1942ZM3.32586 11.0813C3.77486 10.7505 4.41095 10.7883 4.818 11.1942L5.5241 10.4861C4.76206 9.72624 3.57335 9.65696 2.73278 10.2761L3.32586 11.0813ZM2.73278 10.2761C2.92014 10.1381 3.18591 10.1519 3.35736 10.3229L2.65126 11.031C2.83615 11.2153 3.12322 11.2305 3.32586 11.0813L2.73278 10.2761ZM5.6937 12.6526C5.86506 12.8234 5.87956 13.089 5.74224 13.2766L4.93531 12.6859C4.78661 12.8891 4.8026 13.1762 4.9876 13.3607L5.6937 12.6526ZM13.2671 5.73088C13.0797 5.86898 12.8138 5.85517 12.6423 5.68415L13.3484 4.97604C13.1636 4.79173 12.8766 4.77653 12.674 4.92579L13.2671 5.73088ZM10.306 3.35445C10.1347 3.18363 10.1202 2.9182 10.2574 2.73067L11.0644 3.32128C11.2131 3.11809 11.1971 2.83087 11.0121 2.64634L10.306 3.35445Z" fill="currentColor"></path></svg>
  )
  const TourIcon = (
    <svg viewBox="0 0 16 16" fill="none" aria-label="Tours" aria-hidden="false" width="18" height="18"><path d="M6.81244 11C6.82191 10.1321 6.82182 9.27705 6.81829 8.46045M6.81829 8.46045C6.80649 5.7307 6.75637 3.43093 6.89736 2.52135C7.08054 1.33969 8.9965 2.41496 11.2852 3.29921L12.3164 3.74364C13.0754 4.07075 14.1594 4.65176 13.6831 5.33042C13.4869 5.61 13.08 5.9298 12.3288 6.2835L6.81829 8.46045Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.5 9.39301C2.69584 9.83726 1.5 10.6149 1.5 11.5C1.5 12.8807 4.41015 14 8 14C11.5899 14 14.5 12.8807 14.5 11.5C14.5 10.5101 13.0041 9.65454 10.8342 9.24954" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  );
  const Transportation=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Transportation" aria-hidden="false" width="18" height="18"><g><path d="M1.66669 8.66666L3.00002 9.33332" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 9L13 9.33333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33334 12.3333L5.49712 11.9239C5.74068 11.315 5.86246 11.0105 6.11641 10.8386C6.37036 10.6667 6.69827 10.6667 7.35408 10.6667H8.64594C9.30175 10.6667 9.62966 10.6667 9.88361 10.8386C10.1376 11.0105 10.2593 11.315 10.5029 11.9239L10.6667 12.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33334 12V13.9213C1.33334 14.1738 1.49385 14.4047 1.74793 14.5176C1.9128 14.5909 2.07027 14.6667 2.26039 14.6667H3.40629C3.59642 14.6667 3.75389 14.5909 3.91875 14.5176C4.17284 14.4047 4.33334 14.1738 4.33334 13.9213V12.6667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.6667 12.6667V13.9213C11.6667 14.1738 11.8272 14.4047 12.0813 14.5176C12.2461 14.5909 12.4036 14.6667 12.5937 14.6667H13.7396C13.9298 14.6667 14.0872 14.5909 14.2521 14.5176C14.5062 14.4047 14.6667 14.1738 14.6667 13.9213V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3333 6.33333L14 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.66669 6.33333L2.00002 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 7L3.72554 4.82339C4.01888 3.94337 4.16555 3.50335 4.51473 3.25168C4.86392 3 5.32773 3 6.25536 3H9.74464C10.6723 3 11.1361 3 11.4853 3.25168C11.8345 3.50335 11.9811 3.94337 12.2745 4.82339L13 7" stroke="currentColor" stroke-linejoin="round"></path><path d="M10.3334 2.99998C10.1732 2.1956 10.0932 1.7934 9.90255 1.56336C9.71194 1.33331 9.45875 1.33331 8.95238 1.33331H7.04766C6.54129 1.33331 6.2881 1.33331 6.09749 1.56336C5.90688 1.7934 5.82682 2.19559 5.66669 2.99998" stroke="currentColor" stroke-linejoin="round"></path><path d="M3.00001 7H13C13.6382 7.63814 14.6667 8.52682 14.6667 9.51828V11.7034C14.6667 12.0626 14.4136 12.365 14.0779 12.4069L12 12.6667H4.00001L1.92212 12.4069C1.58637 12.365 1.33334 12.0626 1.33334 11.7034V9.51828C1.33334 8.52682 2.36187 7.63814 3.00001 7Z" stroke="currentColor" stroke-linejoin="round"></path></g></svg>
  )
  const Travel=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Travel Services" aria-hidden="false" width="18" height="18"><path d="M11.2866 7.74967C11.2866 7.10932 10.9983 6.4814 10.4157 6.21579C9.70499 5.89183 8.85266 5.70312 7.93627 5.70312C7.01988 5.70312 6.16755 5.89183 5.45686 6.21579C4.87421 6.4814 4.58594 7.10932 4.58594 7.74967" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.01051 3.98985C8.76708 3.98985 9.3804 3.37651 9.3804 2.61992C9.3804 1.86334 8.76708 1.25 8.01051 1.25C7.25394 1.25 6.64062 1.86334 6.64062 2.61992C6.64062 3.37651 7.25394 3.98985 8.01051 3.98985Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.19336 9.27344H13.8065" stroke="currentColor" stroke-linecap="round"></path><path d="M3.64648 9.27344H12.3564V12.7645C12.3564 13.8334 11.4898 14.7 10.4208 14.7H5.58203C4.51306 14.7 3.64648 13.8334 3.64648 12.7645V9.27344Z" stroke="currentColor"></path></svg>
  )
  const cruises=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Cruises" aria-hidden="false" width="18" height="18"><path d="M14.0273 13.7474C13.5981 14.4057 13.0432 14.4057 12.6036 13.7474C11.1899 11.5849 9.84346 15.3028 8.84538 13.7717C7.32331 11.4776 6.22855 15.4565 5.08719 13.7474C3.59883 11.4705 2.67162 15.2409 1.50001 13.9923" stroke="currentColor" stroke-linecap="round"></path><path d="M2.48482 11.5L1.54686 8.04289C1.37706 7.54913 1.68968 7.01208 2.14686 7.01208H10.5817L11.5197 6.22852H13.8701C15.808 6.22852 11.5197 11.5 11.5197 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5223 6.22777L10.8129 4.45434C10.6739 4.1068 10.3374 3.87891 9.96306 3.87891C9.35019 3.87891 8.42009 3.87891 7.82481 3.87891H4.63232C3.76749 3.87891 3.06641 4.38368 3.06641 5.00636V6.69754" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.57031 3.87909V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.70312 3.87909V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="4.59308" cy="9.16534" r="0.587216" fill="currentColor"></circle><circle cx="6.47198" cy="9.16534" r="0.587216" fill="currentColor"></circle><circle cx="8.34893" cy="9.16534" r="0.587216" fill="currentColor"></circle></svg>
  )
  const Food=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Food &amp; Drink" aria-hidden="false" width="18" height="18"><path d="M9.99999 6.66666L2.66666 14.0007" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9999 2.00064L9.99992 4.00064C9.63646 4.36414 9.45472 4.54589 9.35752 4.74195C9.17266 5.11499 9.17266 5.55295 9.35752 5.92599C9.45472 6.12205 9.63646 6.30381 9.99992 6.66732C10.3635 7.03079 10.5452 7.21259 10.7413 7.30972C11.1143 7.49459 11.5523 7.49459 11.9253 7.30972C12.1214 7.21259 12.3031 7.03079 12.6666 6.66732L14.6666 4.66731" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3333 3.33267L11.3333 5.33267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.8965 6.5638C4.98646 7.47386 3.73848 7.70132 2.60098 6.5638C1.46344 5.42625 0.867065 3.35443 1.7771 2.4444C2.68714 1.53436 4.75895 2.13073 5.8965 3.26828C7.03401 4.40578 6.80654 5.65376 5.8965 6.5638ZM5.8965 6.5638L13.3333 14.0007" stroke="currentColor" stroke-linecap="round"></path></svg>
  )
  const entertain=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Entertainment" aria-hidden="false" width="18" height="18"><path d="M2.00199 13.2C2.00199 12.7274 1.93054 12.182 2.64463 11.9126C2.94288 11.8 3.3433 11.8 4.14413 11.8H11.8559C12.6567 11.8 13.0571 11.8 13.3554 11.9126C14.0695 12.182 13.998 12.7274 13.998 13.2C13.998 13.6726 14.0695 14.218 13.3554 14.4874C13.0571 14.6 12.6567 14.6 11.8559 14.6H4.14413C3.3433 14.6 2.94288 14.6 2.64463 14.4874C1.93054 14.218 2.00199 13.6726 2.00199 13.2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.00132 10.4C4.00132 9.92742 3.95369 9.38198 4.42975 9.11256C4.62858 9 4.89553 9 5.42942 9H10.5706C11.1045 9 11.3714 9 11.5702 9.11256C12.0463 9.38198 11.9987 9.92742 11.9987 10.4C11.9987 10.8726 12.0463 11.418 11.5702 11.6874C11.3714 11.8 11.1045 11.8 10.5706 11.8H5.42942C4.89553 11.8 4.62858 11.8 4.42975 11.6874C3.95369 11.418 4.00132 10.8726 4.00132 10.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.47509 1.89715L8.95903 2.87304C9.02503 3.00889 9.20103 3.13919 9.34948 3.16413L10.2267 3.31109C10.7876 3.40536 10.9196 3.81566 10.5154 4.22041L9.83342 4.90802C9.71798 5.02445 9.65473 5.24902 9.69048 5.40978L9.88567 6.26091C10.0397 6.93465 9.68498 7.19524 9.09378 6.84313L8.27165 6.35243C8.12315 6.26371 7.87839 6.26371 7.7272 6.35243L6.90502 6.84313C6.31659 7.19524 5.95913 6.93185 6.11311 6.26091L6.30834 5.40978C6.34409 5.24902 6.28084 5.02445 6.16535 4.90802L5.48343 4.22041C5.08198 3.81566 5.21121 3.40536 5.77215 3.31109L6.6493 3.16413C6.79504 3.13919 6.97102 3.00889 7.03701 2.87304L7.52095 1.89715C7.78495 1.36762 8.21389 1.36762 8.47509 1.89715Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  )
  const Adventure=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Adventure" aria-hidden="false" width="18" height="18"><g><path d="M3.33334 5.11111C3.33334 4.69779 3.33334 4.49112 3.37878 4.32157C3.50206 3.86145 3.86146 3.50205 4.32158 3.37876C4.49114 3.33333 4.6978 3.33333 5.11112 3.33333H10.8889C11.3022 3.33333 11.5089 3.33333 11.6784 3.37876C12.1385 3.50205 12.4979 3.86145 12.6213 4.32157C12.6667 4.49112 12.6667 4.69779 12.6667 5.11111C12.6667 5.93775 12.6667 6.35107 12.5758 6.6902C12.3292 7.6104 11.6104 8.3292 10.6902 8.5758C10.3511 8.66666 9.93774 8.66666 9.11114 8.66666H6.88888C6.06226 8.66666 5.64894 8.66666 5.30982 8.5758C4.38958 8.3292 3.67079 7.6104 3.42421 6.6902C3.33334 6.35107 3.33334 5.93775 3.33334 5.11111Z" stroke="currentColor"></path><path d="M12 7.33333C12.2477 7.72259 12.3716 7.91726 12.4593 8.12646C12.5375 8.31293 12.5942 8.50766 12.6283 8.70693C12.6667 8.93059 12.6667 9.16126 12.6667 9.62273V10.6667C12.6667 12.5523 12.6667 13.4951 12.0809 14.0809C11.4951 14.6667 10.5523 14.6667 8.66668 14.6667H7.33334C5.44772 14.6667 4.50492 14.6667 3.91913 14.0809C3.33334 13.4951 3.33334 12.5523 3.33334 10.6667V9.62273C3.33334 9.16126 3.33334 8.93059 3.37168 8.70693C3.40584 8.50766 3.46254 8.31293 3.54071 8.12646C3.62843 7.91726 3.75229 7.72259 4.00001 7.33333" stroke="currentColor"></path><path d="M3.33334 13.3333C2.88235 13.3333 2.65686 13.3333 2.46813 13.2813C2.05525 13.1675 1.72046 12.8775 1.56105 12.4955C1.48819 12.321 1.46575 12.1062 1.42087 11.6767L1.37795 11.2657C1.32664 10.7746 1.30099 10.5291 1.40594 10.3473C1.64051 9.941 2.16751 10.0035 2.57137 10.0035H3.33334" stroke="currentColor"></path><path d="M12.6667 13.3333C13.1177 13.3333 13.3431 13.3333 13.5319 13.2813C13.9447 13.1673 14.2795 12.877 14.4389 12.4947C14.5118 12.3199 14.5343 12.1049 14.5791 11.6749L14.6221 11.2636C14.6637 10.865 14.7686 10.3751 14.3806 10.1182C14.2021 10 13.9443 10 13.4287 10H12.6667" stroke="currentColor"></path><path d="M6 9.66667V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 9.66667V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 3.33333C10 2.22876 9.1046 1.33333 8 1.33333C6.8954 1.33333 6 2.22876 6 3.33333" stroke="currentColor"></path></g></svg>
  )
  const aerial=(
    <svg viewBox="0 0 16 16" fill="none" aria-label="Aerial Sightseeing" aria-hidden="false" width="18" height="18"><rect x="3" y="1" width="10" height="14" rx="5" stroke="currentColor"></rect><path d="M4.3 12.5H6.65001C7.39561 12.5 8.00001 11.8956 8.00001 11.15C8.00001 10.4044 7.38887 9.80002 6.64327 9.80002C6.72647 8.87707 5.98661 8 5.00001 8C4.33445 8 3.76088 8.39409 3.5 8.96166" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.3 7.9H9.5C8.6716 7.9 8 7.22843 8 6.4C8 5.6201 8.5952 4.97922 9.35613 4.90681C9.42867 4.06259 10.137 3.4 11 3.4C11.3042 3.4 11.5849 3.48336 11.8252 3.62572" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  )
  const themes = [
    { name: "Tickets", icon: Ticketicon, options: ["Museums", "Water Parks", "Observation Decks", "Theme Parks", "City Cards", "Aquariums", "Zoos", "Religious Sites", "Immersive Experiences", "Parks", "Landmarks", "View all Tickets"] },
    { name: "Tours", icon: TourIcon, options: ["Walking Tours", "Private Tours", "Bike Tours"] },
    { name: "Transportation", icon: Transportation, options: ["Car Rental", "Train Tickets", "Airport Transfers"] },
    { name: "Travel Services", icon: Travel, options: ["Travel Insurance", "SIM Cards"] },
    { name: "Cruises", icon: cruises, options: ["River Cruises", "Dinner Cruises"] },
    { name: "Food & Drink", icon: Food, options: ["Food Tours", "Wine Tastings"] },
    { name: "Entertainment", icon: entertain, options: ["Concerts", "Theatre Shows"] },
    { name: "Adventure", icon: Adventure, options: ["Zipline", "Skydiving"] },
    { name: "Aerial Sightseeing", icon: aerial, options: ["Helicopter Rides", "Hot Air Balloons"] },
    { name: "Shopping", icon: "", options: ["Malls", "Markets"] },
    { name: "Nightlife", icon: "", options: ["Clubs", "Bars"] },
    { name: "Wellness", icon: "", options: ["Spas", "Retreats"] },
    { name: "Sports", icon:"" , options: ["Stadium Tours", "Live Matches"] },
    { name: "Workshops", icon: "", options: ["Pottery", "Cooking Classes"] },
  ];
  
  
const PartnersSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5); // small buffer
    };

    const ref = scrollRef.current;
    if (ref) {
      handleScroll(); // on load
      ref.addEventListener("scroll", handleScroll);
    }

    return () => ref && ref.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeftFn = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRightFn = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white py-12">
      <style jsx global>{`
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>
      <h2 className="text-left lg:text-left pl-4 lg:pl-32 text-xl lg:text-3xl font-bold mb-8" style={{ color: 'rgb(68, 68, 68)' }}>
  We have the best partners
</h2>


      <div className="space-y-6">
        <Marquee gradient={false} speed={50} pauseOnHover>
          {[...logosTop, ...logosTop].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="mx-6 h-20 object-contain"
            />
          ))}
        </Marquee>

        <Marquee gradient={false} speed={50} direction="right"  pauseOnHover>
          {[...logosBottom, ...logosBottom].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="mx-6 h-20 object-contain mt-8"
            />
          ))}
        </Marquee>
      </div>

      {/* Themes section */}
      <div className="mt-16 px-6 md:px-32">
      <h3 className="text-xl font-semibold text-gray-600 mb-4">Browse by themes</h3>

      <div className="relative">
        {/* Scrollable Buttons */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-2 pr-10 hide-scrollbar scroll-smooth"
        >
          {themes.map((theme, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 relative text-gray-700 pb-1 transition-colors cursor-pointer whitespace-nowrap ${
                selectedTheme.name === theme.name
                  ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.5px] after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
              onClick={() => setSelectedTheme(theme)}
            >
              {theme.icon} {theme.name}
            </button>
          ))}
        </div>

        {/* Left Scroll Button */}
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-1 shadow hidden md:block z-10"
            onClick={scrollLeftFn}
          >
            <ChevronLeft color="gray" size={20} />
          </button>
        )}

        {/* Right Scroll Button */}
        {showRightArrow && (
          <button
            className="absolute right-0  cursor-pointer top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-1 shadow hidden md:block z-10"
            onClick={scrollRightFn}
          >
            <ChevronRight  color="gray" size={20} />
          </button>
        )}
      </div>

      {/* Options under theme */}
      <div className="mt-6 text-sm grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 underline">
        {selectedTheme.options.map((option, index) => (
          <span
            key={index}
            className="cursor-pointer hover:text-purple-600 transition-colors"
          >
            {option}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PartnersSection;
