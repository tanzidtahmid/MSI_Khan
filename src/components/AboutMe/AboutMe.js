import React from 'react';
import aboutMe from "../../Images/AboutMe.jpg";
import Navbar from '../Home/Navbar/Navbar';

const AboutMe = () => {
    return (
        
        <div className='' >
            <Navbar></Navbar>
            {/* <div className="">
                <div>
                    <img className='rounded-xl' src={aboutMe} alt="" />
                </div>
            </div> */}

            <div className=' max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <h3>About Me</h3>
                <table class="table-fixed border-collapse border border-slate-400">
                    <thead>
                        <tr>
                            <th rowspan="2"> <p  className='text-end p-6'> স্কুল জীবন </p></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th  class="border border-slate-300 p-6">প্রতিযোগিতা</th>
                        <th  class="border border-slate-300 p-6">স্থান</th>
                        <th  class="border border-slate-300 p-6">Year</th>
                    </tr>

                
                        <tr>
                            <td  class="border border-slate-300 p-6">বিদ্যুৎ জ্বালানী ও খনিজ সম্পদ মন্ত্রণালয় কতৃক আয়োজিত রচনা প্রতিযোগিতায় উপজেলা ও জেলা উভয়</td>
                            <td  class="border border-slate-300 p-6">প্রথম স্থান</td>
                            <td  class="border border-slate-300 p-6">২০১১</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বেসরকারি এনজিও প্রতিষ্ঠান এসডিএস কর্তৃক প্রকৃতিক দুর্যোগ প্রতিরোধ বিষয়ক রচনা প্রতিযোগিতা</td>
                            <td  class="border border-slate-300 p-6">প্রথম স্থান</td>
                            <td  class="border border-slate-300 p-6">২০১১</td>
                        </tr>


                        <tr>
                            <td  colspan="3" class="p-6 text-center">কলেজ জীবন:</td>
                        </tr>
                        <tr>
                            <td  class="border border-slate-300 p-6">‘অসমাপ্ত আত্মজীবনী’ বইয়ের ওপর বক্তৃতা প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">তৃতীয় স্থান,ঢাকা কলেজ</td>
                            <td  class="border border-slate-300 p-6">২০১৩</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">২১শে ফেব্রুয়ারি রচনা প্রতিযোগিতা</td>
                            <td  class="border border-slate-300 p-6">তৃতীয় স্থান,ঢাকা কলেজ</td>
                            <td  class="border border-slate-300 p-6">২০১৪</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বিশ্ব পরিবেশ দিবস রচনা প্রতিযোগিতা</td>
                            <td  class="border border-slate-300 p-6">সারাদেশে প্রথম</td>
                            <td  class="border border-slate-300 p-6">২০১৪</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">পরিবেশ বাচাঁও আন্দোলন (পবা), উপস্থিত বক্তৃতা</td>
                            <td  class="border border-slate-300 p-6">২য় স্থান,ঢাকা কলেজ</td>
                            <td  class="border border-slate-300 p-6">২০১৪</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">রচনা প্রতিযোগিতায়, আন্তর্জাতিক মাতৃভাষা দিবস</td>
                            <td  class="border border-slate-300 p-6">৪র্থ স্থান,তমদ্দুন মজলিস</td>
                            <td  class="border border-slate-300 p-6">২০১৫</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বার্ষিক মিলাদ মাহ্ফিল ও সাংস্কৃতিক প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">সাধারণ জ্ঞানে প্রথম স্থান, ঢাকা কলেজ</td>
                            <td  class="border border-slate-300 p-6">২০১৫,</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বার্ষিক মিলাদ মাহ্ফিল ও সাংস্কৃতিক প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">রচনায় তৃতীয় স্থান, ঢাকা কলেজ</td>
                            <td  class="border border-slate-300 p-6">২০১৫</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বার্ষিক মিলাদ মাহ্ফিল ও সাংস্কৃতিক প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">ইসলামী ক্যালিগ্রাফীতে প্রথম স্থান, ঢাকা কলেজ</td>
                            <td  class="border border-slate-300 p-6">২০১৫</td>
                        </tr>

                        {/* university */}


                        <tr>
                            <td  colspan="3" class="p-6 text-center">বিশ্ববিদ্যালয় জীবনে যত অর্জন</td>
                        </tr>
                        <tr>
                            <td  class="border border-slate-300 p-6">১ম শহীদ বুদ্ধিজীবী দিবস আন্তঃক্লাব বারোয়ারি বিতর্ক </td>
                            <td  class="border border-slate-300 p-6">৪র্থ রানার আপ, বঙ্গমাতা হল</td>
                            <td  class="border border-slate-300 p-6">২০১৭</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">তাজউদ্দীন আহমদ প্রবন্ধ প্রতিযোগিতা</td>
                            <td  class="border border-slate-300 p-6">চ্যাম্পিয়ন,ঢাকা বিশ্ববিদ্যালয় </td>
                            <td  class="border border-slate-300 p-6">২০১৮</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">ত্বকী পদক-২০১৮ জাতীয় প্রবন্ধ প্রতিযোগিতা, সন্ত্রাস নির্মূল ত্বকী মঞ্চ</td>
                            <td  class="border border-slate-300 p-6">চ্যাম্পিয়ন</td>
                            <td  class="border border-slate-300 p-6">২০১৮</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">৮ম জেল হত্যা দিবস আন্তঃক্লাব বারোয়ারি বিতর্ক প্রতিযোগিতা, কবি জসীম উদ্দীন হল।</td>
                            <td  class="border border-slate-300 p-6">রানার্সআপ</td>
                            <td  class="border border-slate-300 p-6">২০১৮</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">সাহিত্য ও সাংস্কৃতিক প্রতিযোগিতা, স্যার এ এফ রহমান হল।</td>
                            <td  class="border border-slate-300 p-6">বক্তৃতায় প্রথম  </td>
                            <td  class="border border-slate-300 p-6">২০১৯</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বার্ষিক মিলাদ মাহ্ফিল ও সাংস্কৃতিক প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">সাধারণ জ্ঞানে প্রথম স্থান</td>
                            <td  class="border border-slate-300 p-6">২০১৫, ঢাকা কলেজ</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বার্ষিক মিলাদ মাহ্ফিল ও সাংস্কৃতিক প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">রচনায় তৃতীয় স্থান</td>
                            <td  class="border border-slate-300 p-6">২০১৫, ঢাকা কলেজ</td>
                        </tr>
                        <tr>
                            <td th class="border border-slate-300 p-6">বার্ষিক মিলাদ মাহ্ফিল ও সাংস্কৃতিক প্রতিযোগিতা </td>
                            <td  class="border border-slate-300 p-6">ইসলামী ক্যালিগ্রাফীতে প্রথম স্থান</td>
                            <td  class="border border-slate-300 p-6">২০১৫, ঢাকা কলেজ</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default AboutMe;