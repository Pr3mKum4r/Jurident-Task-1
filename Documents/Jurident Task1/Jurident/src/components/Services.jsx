import './Services.css'
const Services = () => {
  return (
    <div className="main">
      <div className="background-image">
        <h1>ABCD Constructions</h1>
        <h3>{`"Crafting solid foundations and shaping dreams, we are the builders who turn visions into reality. With precision and passion, we construct a better world, one project at a time."`}</h3>
        <button>View More</button>
      </div>

      <div className="service-section">
        <div className='service-btn'>

          <input type="checkbox" name='example_accordiaon' id='section'className='accordion_input' />
          <label htmlFor="section" className='accordion_label'>Services
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53691 7.01705L11.0738 0H0L5.53691 7.01705Z" fill="white"/>
            </svg>
          </label>          

          <div className="services">
            <div className="constructions card">
              <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="114" viewBox="0 0 108 114" fill="none"><path d="M92.3928 25.4648H68.7939V31.72H92.3928V97.399H68.7939V103.654H98.2925V31.72C98.2925 30.061 97.6709 28.47 96.5645 27.2969C95.4581 26.1239 93.9575 25.4648 92.3928 25.4648Z" fill="black"/><path d="M59.5902 9.82715H19.0003C17.3417 9.82715 15.751 10.5257 14.5782 11.7692C13.4055 13.0126 12.7466 14.6991 12.7466 16.4576V103.654H65.8439V16.4576C65.8439 14.6991 65.1851 13.0126 64.0123 11.7692C62.8395 10.5257 61.2488 9.82715 59.5902 9.82715ZM59.9442 97.3992H51.0947V88.0164H27.4958V97.3992H18.6463V16.4576C18.6463 16.4083 18.6554 16.3595 18.6732 16.314C18.691 16.2684 18.7171 16.2271 18.75 16.1922C18.7828 16.1574 18.8219 16.1297 18.8648 16.1109C18.9078 16.092 18.9538 16.0823 19.0003 16.0823H59.5902C59.6367 16.0823 59.6828 16.092 59.7257 16.1109C59.7687 16.1297 59.8077 16.1574 59.8405 16.1922C59.8734 16.2271 59.8995 16.2684 59.9173 16.314C59.9351 16.3595 59.9442 16.4083 59.9442 16.4576V97.3992Z" fill="black"/><path d="M24.5459 25.4648H30.4456V31.72H24.5459V25.4648Z" fill="black"/><path d="M36.3457 25.4648H42.2454V31.72H36.3457V25.4648Z" fill="black"/><path d="M48.145 25.4648H54.0447V31.72H48.145V25.4648Z" fill="black"/><path d="M24.5459 41.1025H30.4456V47.3577H24.5459V41.1025Z" fill="black"/><path d="M36.3457 41.1025H42.2454V47.3577H36.3457V41.1025Z" fill="black"/><path d="M48.145 41.1025H54.0447V47.3577H48.145V41.1025Z" fill="black"/><path d="M24.5459 56.7407H30.4456V62.9959H24.5459V56.7407Z" fill="black"/><path d="M36.3457 56.7407H42.2454V62.9959H36.3457V56.7407Z" fill="black"/><path d="M48.145 56.7407H54.0447V62.9959H48.145V56.7407Z" fill="black"/><path d="M24.5459 72.3784H30.4456V78.6336H24.5459V72.3784Z" fill="black"/><path d="M36.3457 72.3784H42.2454V78.6336H36.3457V72.3784Z" fill="black"/><path d="M48.145 72.3784H54.0447V78.6336H48.145V72.3784Z" fill="black"/><path d="M68.7939 41.1025H74.6937V47.3577H68.7939V41.1025Z" fill="black"/><path d="M80.5933 41.1025H86.493V47.3577H80.5933V41.1025Z" fill="black"/><path d="M68.7939 56.7407H74.6937V62.9959H68.7939V56.7407Z" fill="black"/><path d="M80.5933 56.7407H86.493V62.9959H80.5933V56.7407Z" fill="black"/><path d="M68.7939 72.3784H74.6937V78.6336H68.7939V72.3784Z" fill="black"/><path d="M80.5933 72.3784H86.493V78.6336H80.5933V72.3784Z" fill="black"/></svg>
              </div>
              <div className="content">
                <h3>Constructions</h3>
                <p>Integrated construction harmonizes diverse elements, shaping visions into tangible reality</p>
              </div>
            </div>

            <div className="demolition card">
              <div className="svg">
                <img src="/images/image1.png" alt="" />
              </div>
              <div className="content">
                <h3>Demolition</h3>
                <p>Efficient demolition cleared space, preparing for renovation and rebuilding.</p>
              </div>
            </div>

        <div className="foundation card">
          <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="97" viewBox="0 0 80 97" fill="none"><path d="M79.4998 10.4848H73.3857V5.38824C73.3857 2.93317 71.6156 0.925781 69.4574 0.925781H49.7943C47.6421 0.925781 45.8721 2.93317 45.8721 5.38824V10.4848H9.09713L0.0161133 29.6028H6.32131V42.3481H5.30025L0.20718 48.7208L5.30025 55.0935H6.41608V58.5156C6.41608 59.3807 7.05653 60.0801 7.84984 60.0801C10.2206 60.0801 12.1496 62.1895 12.1496 64.7815C12.1496 67.3736 10.2206 69.483 7.84984 69.483C5.47909 69.483 3.55008 67.3736 3.55008 64.7815C3.55008 63.9165 2.9081 63.217 2.11632 63.217C1.32301 63.217 0.682553 63.9165 0.682553 64.7815C0.68561 69.1054 3.89859 72.6183 7.84984 72.6183C11.7996 72.6183 15.0156 69.1054 15.0156 64.7831C15.0156 60.9994 12.5501 57.8321 9.28361 57.1073V55.0935H10.3979L15.4925 48.7208L10.3979 42.3481H9.37838V29.6028H45.8721V41.072C45.8721 43.1877 47.1882 44.9609 48.9292 45.4166V96.5158H52.9416V86.9568L66.3162 91.7363L52.9416 96.5158H70.3286V45.415C72.0711 44.9609 73.3857 43.1877 73.3857 41.072V29.6028H79.4998V24.8233H76.3235L79.4998 18.5383V10.4848ZM7.11309 24.8233L10.6837 17.1777L14.5448 24.8233H7.11309ZM13.8723 15.2643H20.2203L17.047 21.5493L13.8723 15.2643ZM19.5492 24.8233L22.724 18.5383L25.9003 24.8233H19.5492ZM25.2277 15.2643H31.5757L28.401 21.5493L25.2277 15.2643ZM30.9062 24.8233L34.0795 18.5383L37.2527 24.8233H30.9062ZM36.5832 15.2643H42.9312L39.758 21.5493L36.5832 15.2643ZM45.8721 24.8233H42.2602L45.4334 18.5383L45.8721 19.4065V24.8233ZM66.3162 86.9568L52.9416 82.1773L66.3162 77.3978V86.9568ZM52.9416 77.3978V67.8388L66.3162 72.6215L52.9416 77.3978ZM66.3162 67.8388L52.9416 63.0593L66.3162 58.2798V67.8388ZM52.9416 58.2798V48.724L66.3162 53.5003L52.9416 58.2798ZM66.3162 48.724L57.3972 45.5345H66.3162V48.724ZM68.609 22.0321C68.609 23.5663 67.5757 24.8233 66.3162 24.8233H52.5564C51.2969 24.8233 50.2666 23.5663 50.2666 22.0321V8.50607C50.2666 6.96229 51.2969 5.70528 52.5564 5.70528H66.3162C67.5757 5.70528 68.609 6.96229 68.609 8.50607V22.0321ZM73.8213 21.5493L73.3857 20.6858V15.2643H76.9945L73.8213 21.5493Z" fill="black"/></svg>
          </div>
          <div className="content">
            <h3>Foundation</h3>
            <p>Solid construction foundation supports lasting structural integrity and stability.</p>
          </div>
        </div>

        <div className="building card">
          <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
           <path d="M11.6508 24.0084C15.164 20.9806 18.0785 23.0687 21.9682 28.0635C22.405 28.6273 22.9924 27.9674 23.3276 27.6459C23.6589 27.3201 28.7913 22.1959 29.0436 21.962C29.2921 21.7156 29.5934 21.2562 29.198 20.7425C28.2456 19.436 27.3129 18.1119 26.4002 16.771C19.5922 6.89416 45.0244 0.195475 41.1196 0.0910695C39.1314 0.0326022 31.156 -0.0718034 29.9624 0.0743648C25.1312 0.638157 19.065 5.64546 16.0112 7.97998C12.016 11.0119 10.5249 12.791 10.2801 13.0374C9.15046 14.1316 10.0994 16.6582 8.05093 18.6503C5.88577 20.7509 4.53395 19.1598 3.28004 20.3792C2.65873 20.9889 0.919073 22.4339 0.422026 22.9142C-0.0787854 23.4028 -0.169157 24.2255 0.342951 24.8812C0.342951 24.8812 5.10254 30.7112 5.50169 31.2291C5.89707 31.7386 6.974 32.1813 7.63673 31.5256C8.30322 30.8741 10.0165 29.2161 10.3027 28.9238C10.5964 28.6482 10.1144 25.3281 11.6508 24.0084ZM33.1442 26.1675C32.6924 25.587 32.1313 25.5703 31.6493 26.0464L26.2496 31.275C26.0411 31.4848 25.9141 31.776 25.8951 32.0875C25.8762 32.399 25.9668 32.7065 26.1479 32.9455L57.379 72.365C58.1095 73.2963 59.3747 73.3923 60.2069 72.5863L63.8594 69.191C64.2615 68.7984 64.5076 68.2457 64.5442 67.6529C64.5809 67.0602 64.4052 66.4753 64.0552 66.0255L33.1442 26.1675ZM74.7869 9.39154C74.5083 7.32849 73.5443 7.75864 73.0435 8.63147C72.5427 9.51266 70.3286 13.2337 69.4173 14.9209C68.5136 16.5914 66.2844 19.8948 62.1348 16.6331C57.812 13.2462 59.3145 10.8825 60.0676 9.29131C60.8244 7.69182 63.1478 3.20654 63.4829 2.6511C63.818 2.08731 63.4264 0.450226 62.0859 1.13513C60.7416 1.82003 52.5855 5.41577 51.4559 10.5734C50.2999 15.8188 52.4236 20.5087 48.2552 25.1652L43.1981 31.0119L48.2778 37.5519L54.5059 30.9952C55.9895 29.3414 59.1601 27.7336 62.0294 28.4602C68.1785 30.0013 71.5335 27.4412 73.5556 23.2065C75.3706 19.4229 75.0693 11.4546 74.7869 9.39154ZM10.1596 66.4514C9.78296 66.8723 9.5716 67.4412 9.5716 68.0342C9.5716 68.6272 9.78296 69.1962 10.1596 69.617L13.7406 73.5009C14.5238 74.3738 15.7664 74.0062 16.5497 73.1334L35.027 52.9873L29.3674 45.8292L10.1596 66.4514Z" fill="black"/>
            </svg>
          </div>
          <div className="content">
            <h3>Building Repairs</h3>
            <p>Expert repairs covered renovation, plumbing, electrical</p>
          </div>
        </div>

        <div className="painting card">
          <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="83" viewBox="0 0 65 83" fill="none">
          <path d="M0.461914 3.55367C0.461914 2.78238 0.796881 2.04268 1.39312 1.49729C1.98937 0.951903 2.79805 0.645508 3.64126 0.645508H60.8695C61.7127 0.645508 62.5214 0.951903 63.1177 1.49729C63.7139 2.04268 64.0489 2.78238 64.0489 3.55367V49.3572C64.0489 50.5984 63.7816 51.8275 63.2623 52.9742C62.7431 54.1209 61.9819 55.1628 61.0224 56.0405C60.0629 56.9181 58.9239 57.6143 57.6702 58.0893C56.4166 58.5643 55.0729 58.8088 53.716 58.8088H44.9728V70.4414C44.9728 73.5266 43.6329 76.4854 41.2479 78.667C38.863 80.8485 35.6283 82.0741 32.2554 82.0741C28.8825 82.0741 25.6478 80.8485 23.2628 78.667C20.8779 76.4854 19.538 73.5266 19.538 70.4414V58.8088H10.7948C9.43786 58.8088 8.09422 58.5643 6.84057 58.0893C5.58693 57.6143 4.44784 56.9181 3.48834 56.0405C2.52885 55.1628 1.76773 54.1209 1.24846 52.9742C0.729182 51.8275 0.461914 50.5984 0.461914 49.3572V3.55367ZM6.82061 6.46183V35.5435H57.6902V6.46183H51.3315V21.0027C51.3315 21.7739 50.9965 22.5136 50.4003 23.059C49.804 23.6044 48.9953 23.9108 48.1521 23.9108C47.3089 23.9108 46.5002 23.6044 45.904 23.059C45.3077 22.5136 44.9728 21.7739 44.9728 21.0027V6.46183H38.6141V15.1863C38.6141 15.9576 38.2791 16.6973 37.6829 17.2427C37.0866 17.7881 36.278 18.0945 35.4347 18.0945C34.5915 18.0945 33.7828 17.7881 33.1866 17.2427C32.5904 16.6973 32.2554 15.9576 32.2554 15.1863V6.46183H6.82061ZM57.6902 49.3572V41.3598H6.82061V49.3572C6.82061 51.3639 8.60104 52.9924 10.7948 52.9924H22.7173C23.5606 52.9924 24.3692 53.2988 24.9655 53.8442C25.5617 54.3896 25.8967 55.1293 25.8967 55.9006V70.4414C25.8967 71.984 26.5666 73.4634 27.7591 74.5542C28.9516 75.645 30.569 76.2578 32.2554 76.2578C33.9418 76.2578 35.5592 75.645 36.7517 74.5542C37.9442 73.4634 38.6141 71.984 38.6141 70.4414V55.9006C38.6141 55.1293 38.9491 54.3896 39.5453 53.8442C40.1415 53.2988 40.9502 52.9924 41.7934 52.9924H53.716C55.9097 52.9924 57.6902 51.3639 57.6902 49.3572Z" fill="black"/>
          </svg>
          </div>
          <div className="content">
            <h3>Painting</h3>
            <p>Vibrant painting revived walls, adding a fresh, inviting ambiance.</p>
          </div>
        </div>

        <div className="management card">
          <div className="svg">
          <img src="/images/image2.png" alt="" />
          </div>
          <div className="content">
            <h3>Management</h3>
            <p>Effective site management ensured smooth operations, optimizing construction progress.</p>
          </div>
        </div>


      </div>
        </div>
      
      </div>

      

    </div>
  
  );
  
};

export default Services;
