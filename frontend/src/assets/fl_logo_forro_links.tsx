export const FLLogoForroLinks = (props: {
  color?: string
  width?: string
  height?: string
}) => {
  const { color, width, height } = props
  return (
    <svg
      width={width || '293'}
      height={height || '154'}
      viewBox="0 0 293 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d="M24.9232 141.047C24.9232 142.748 24.3971 148.367 24.2134 151.314C24.1045 152.902 22.9651 153.09 21.7074 153.09C21.3183 153.09 20.9167 153.072 20.5338 153.072C19.2792 153.072 15.2167 153.225 13.8127 153.225H11.5744C9.71898 153.216 7.16939 153.212 5.12099 153.212C3.47729 153.212 2.1916 153.225 1.77756 153.225C0.189897 153.225 0.161879 151.227 0.046696 150.227C0.0124523 149.93 0 146.697 0 142.256C0 138.247 0.0155653 131.826 0.0155653 127.629C0.0155653 126.542 0.0124523 126.717 0.0124523 125.376C0.0124523 119.103 0.0653743 95.3729 0.208575 94.1983C0.376681 92.817 0.566578 92.0433 1.09891 91.918C1.47559 91.8303 6.44093 91.3542 7.63946 91.3542C8.33056 91.3542 8.47999 92.0245 8.47999 92.7481C8.47999 103.197 8.23717 107.166 8.23717 119.309C8.23717 128.988 8.29009 138.551 8.45508 139.164C8.76016 140.311 8.75082 140.342 9.46994 140.342C11.453 140.342 20.4497 139.694 24.0204 139.694C24.7395 139.694 24.9232 140.286 24.9232 141.05V141.047ZM16.8074 103.614C17.5857 103.614 18.7064 103.614 20.1602 103.604H20.4591C20.6054 103.604 21.8973 103.604 22.081 103.764C22.4794 104.118 22.99 105.042 22.99 105.819C22.99 106.195 22.9837 106.837 22.9775 107.419C22.3674 118.354 22.1899 124.556 21.3463 135.55C21.3089 135.894 21.1937 136.252 20.8295 136.252C20.705 136.252 20.5524 136.245 20.3345 136.245C19.961 136.245 19.5687 136.248 19.1952 136.252H13.6757C13.3364 136.252 13.271 135.954 13.271 135.672C13.271 135.65 13.271 135.628 13.271 135.606V135.55C13.271 135.343 13.2617 135.143 13.2617 134.908C13.2617 134.306 14.566 116.099 14.566 115.353V104.124C14.566 103.739 15.0454 103.595 15.391 103.595C15.6182 103.595 15.8922 103.611 16.8105 103.611L16.8074 103.614ZM23.6966 93.3808C23.6966 93.4403 23.6966 93.5123 23.6966 93.5969C23.6966 94.7715 23.678 98.2201 23.1581 98.5678C22.0249 99.3195 21.0256 99.3508 19.1983 99.3508C19.0364 99.3508 18.8683 99.3508 18.6939 99.3508C17.3833 99.3508 15.5217 99.3445 13.9745 99.3383C13.4702 99.3383 13.4173 98.9561 13.4173 98.5333C13.4173 98.4174 13.4204 98.3015 13.4204 98.1887C13.4204 97.6594 13.4578 97.1363 13.4578 96.8106C13.4578 96.4848 13.4329 96.0494 13.4329 95.7394C13.4329 94.073 14.6501 93.8318 15.6556 92.9423C16.0914 92.557 17.0191 92.2876 17.0783 92.2689H17.1001C17.1281 92.2689 18.915 92.2814 20.5058 92.2814C21.3214 92.2814 22.0592 92.2689 22.5324 92.2689C23.155 92.2689 23.6966 92.8859 23.6966 93.3808Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M70.9914 96.2126C70.9914 96.6479 70.9385 97.0959 70.8763 97.4968C70.5774 99.4074 61.8235 145.05 60.1175 151.935C59.9992 152.414 59.607 152.759 59.1462 152.796C58.3649 152.862 57.0698 152.95 55.8682 152.95C55.4573 152.95 55.0619 152.94 54.6977 152.915C53.0882 152.806 44.9662 152.746 42.0026 152.746C39.039 152.746 37.0528 152.746 36.4427 151.882C36.0722 151.352 35.7018 148.84 35.2223 145.354C35.0511 144.101 34.9017 143.02 34.7896 142.416C34.5811 141.292 32.1902 126.592 30.0796 113.625C28.5946 104.494 27.3121 96.6072 27.091 95.298C26.87 93.995 26.9042 93.3153 27.2093 92.9519C27.5144 92.5886 28.0125 92.623 28.5915 92.6669C28.8997 92.6888 29.2515 92.717 29.6344 92.6888C29.9862 92.6638 30.6088 92.6575 31.4026 92.6575C32.6447 92.6575 34.3071 92.6794 36.0286 92.7013C37.7346 92.7233 39.4748 92.7452 40.7854 92.7452C41.5792 92.7452 42.2143 92.7358 42.5847 92.7139C42.6345 92.7139 42.6875 92.7107 42.7342 92.7107C44.8012 92.7107 45.1001 95.536 45.2775 97.2368C45.3367 97.8037 45.4923 99.7363 45.6854 102.183C46.0901 107.266 46.6473 114.229 46.887 115.761C46.9928 116.428 47.3104 118.821 47.7182 121.85C48.6708 128.972 50.2647 140.897 50.6382 142.093C50.9994 143.246 52.1107 144.358 52.7427 144.684C52.9793 144.806 53.0633 144.781 53.0633 144.781C53.166 144.286 53.9599 136.982 54.5389 131.644C54.8284 128.976 55.0775 126.677 55.1926 125.671C55.4168 123.735 55.8651 112.873 56.1919 104.945C56.3943 100.015 56.5562 96.1217 56.6247 95.2322C56.799 92.9081 57.6738 92.6826 59.1244 92.6826C59.2894 92.6826 59.4669 92.6825 59.6474 92.6888H59.7284C61.1044 92.7139 64.4571 93.2213 66.904 93.594C67.9998 93.76 68.9244 93.901 69.4194 93.9574C69.9299 94.0169 70.3221 94.2393 70.5899 94.6183C70.8981 95.0505 70.9946 95.6268 70.9946 96.2157L70.9914 96.2126Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M104.327 151.127C104.327 152.542 104.152 152.73 103.331 152.73C103.035 152.73 102.652 152.705 102.163 152.705C98.8727 152.705 78.1833 153.26 77.6105 153.26C76.4618 153.26 74.5566 152.987 74.2764 152.611C74.0336 152.286 73.3456 147.077 73.3456 146.751C73.3456 143.869 73.7876 126.417 73.7876 125.987C73.7876 125.402 74.1737 97.904 74.1737 95.6206C74.1737 94.6872 74.9768 94.2142 75.4002 93.7882C75.7177 93.4688 78.121 92.0123 78.946 91.8619C79.2137 91.8149 81.4707 91.7961 84.8483 91.7961C89.0883 91.7961 96.3106 91.8588 101.833 91.8588C103.004 91.8588 103.349 92.9613 103.349 93.9636C103.349 94.1641 103.337 94.3332 103.337 94.5118C103.337 96.839 103.393 107.279 103.393 108.225C103.393 109.268 102.91 110.079 101.914 110.079C99.5233 110.079 97.0609 109.575 94.6701 109.575C91.9959 109.575 87.1209 109.6 84.4966 109.6C83.5004 109.6 82.8435 109.587 82.6599 109.587C82.4388 109.587 82.4264 109.81 82.4264 110.041C82.4264 110.398 82.5291 110.868 82.5758 111.066C82.7066 111.664 83.3852 117.787 83.5222 118.27C83.5627 118.314 83.6996 118.329 83.8646 118.329C84.2538 118.329 84.6024 118.267 84.9511 118.267C87.4758 118.267 101.198 118.433 101.892 118.433C103.225 118.433 103.673 118.433 103.673 119.225C103.673 120.497 103.617 126.448 103.617 127.218C103.617 128.468 103.159 128.731 102.776 128.731C102.475 128.731 99.4922 128.619 98.7855 128.565C98.2252 128.521 89.2035 128.509 83.9611 128.509C83.4755 128.509 82.8031 129.474 82.7626 129.677C82.7844 130.131 83.4879 135.384 83.5346 135.913C83.5689 136.296 84.0358 136.74 84.2693 136.925C85.0787 136.985 92.6092 137.53 93.9478 137.53C95.5729 137.53 102.151 137.069 102.898 136.718C103.05 136.646 103.187 136.612 103.312 136.612C103.801 136.612 103.91 137.113 103.91 137.539C103.91 137.693 103.897 137.849 103.897 137.99C103.897 140.142 104.336 150.528 104.336 151.136L104.327 151.127Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M141.977 127.613C143.328 127.613 143.553 128.377 143.553 128.919C143.553 129.592 143.478 129.611 143.478 130.817C143.478 132.321 143.506 134.541 143.506 135.293V151.349C143.506 152.354 142.762 152.545 142.077 152.545C141.66 152.545 141.264 152.473 141.068 152.473C140.726 152.473 136.881 152.505 133.899 152.505C131.72 152.505 131.085 152.458 129.712 152.458C128.822 152.458 127.676 152.483 126.714 152.483C126.154 152.483 125.749 152.511 125.456 152.511C124.768 152.511 124.7 152.351 124.7 151.283C124.7 147.18 125.114 141.683 125.114 135.857C125.114 134.801 124.971 134.075 124.445 134.075C124.354 134.075 124.27 134.087 124.205 134.087C123.95 134.087 121.64 134.159 120.871 134.228C120.068 134.3 117.278 135.406 117.278 135.863C117.278 136.947 117.991 147.217 117.991 150.365C117.991 152.614 117.235 153.122 116.553 153.122C116.41 153.122 116.282 153.106 116.192 153.106C115.893 153.106 113.371 153.137 111.364 153.137C110.358 153.137 109.483 153.128 109.075 153.106C107.858 153.037 107.858 151.628 107.858 151.277C107.858 150.926 107.796 147.756 107.796 147.402C107.796 147.048 107.731 120.85 107.731 120.85C107.731 120.85 107.155 100.848 107.155 99.3696C107.155 97.8912 107.538 96.6445 107.668 96.6445C107.774 96.6445 109.574 94.4457 110.483 93.3244C111.002 92.6854 111.84 92.5476 112.904 92.5476C113.68 92.5476 114.573 92.6196 115.547 92.6196C120.049 92.6196 126.3 92.6823 127.156 92.6823C128.439 92.6823 133.245 92.9642 134.08 93.1051C134.914 93.2461 138.758 95.6391 139.527 96.134C140.296 96.6258 141.9 98.5991 141.965 98.881C142.04 99.213 142.096 111.673 142.096 114.473C142.096 117.101 141.056 117.906 140.682 118.179C140.299 118.46 135.169 119.306 134.08 119.657C132.99 120.008 121.322 124.587 119.719 125.207C118.116 125.827 117.092 126.351 117.092 126.56C117.092 126.77 118.116 127.193 118.629 127.193C119.143 127.193 124.336 127.334 125.039 127.403C125.646 127.462 136.156 127.628 140.355 127.628C141.143 127.628 141.573 127.613 141.974 127.613H141.977Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M180.976 108.34C180.976 108.4 180.976 108.459 180.97 108.519L180.018 121.58C179.965 122.316 179.585 122.952 179.04 123.228L175.902 124.797L159.988 132.931L159.35 133.257C158.706 133.586 156.125 133.589 155.322 133.589C155.076 133.589 155.023 133.937 155.023 134.435C155.023 134.833 155.057 135.328 155.057 135.813C155.057 140.894 155.518 152.27 155.518 152.755C155.518 152.959 154.69 153.028 153.585 153.028C152.302 153.028 150.646 152.937 149.485 152.859C148.678 152.805 148.043 151.988 148.012 150.976L146.253 95.8961C146.253 95.871 146.253 95.846 146.253 95.8209C146.253 95.5578 146.294 95.2978 146.375 95.0535L146.814 93.7411C147.056 93.0113 147.626 92.5383 148.255 92.5383H170.868C171.351 92.5383 171.805 92.8202 172.101 93.2963L180.653 107.131C180.867 107.479 180.983 107.905 180.983 108.34H180.976ZM174.613 110.818C174.613 110.267 174.514 109.781 174.283 109.59C174.283 109.59 171.475 108.92 171.217 108.92H155.882C155.02 108.92 154.905 110.473 154.905 111.557V117.273C154.905 118.338 155.577 118.348 156.417 118.348H161.921C162.083 118.348 165.203 117.161 165.355 117.101L171.382 114.351C171.824 114.176 174.171 112.967 174.346 112.431L174.386 112.306C174.529 111.864 174.61 111.316 174.61 110.818H174.613Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M213.088 109.85C213.088 113.465 213.147 129.42 213.147 140.148C213.147 145.511 213.132 149.567 213.088 150.121C212.97 151.637 212.63 153.028 211.572 153.028C211.472 153.028 211.37 153.015 211.258 152.99C210.912 152.912 210.389 152.887 209.773 152.887C208.39 152.887 206.541 153.022 205.212 153.022C204.879 153.022 204.577 153.012 204.322 152.99C203.444 152.915 199.419 152.878 195.372 152.878C191.589 152.878 187.791 152.912 186.527 152.984C186.45 152.987 186.372 152.99 186.297 152.99C184.059 152.99 183.582 151.011 183.582 150.027C183.582 149.044 184.037 130.924 184.037 124.049C184.037 123.153 184.031 122.464 184.015 122.053C183.884 118.586 183.648 99.7583 183.648 98.1013C183.648 96.4444 184.302 93.7319 185.74 93.5815C186.12 93.5408 187.623 93.5377 189.264 93.5377H190.061C191.739 93.5377 193.395 93.5377 194.005 93.4938C197.04 93.2902 203.005 92.7609 206.937 92.2253C207.746 92.1156 208.375 92.0718 208.926 92.0718C209.626 92.0718 210.202 92.1407 210.862 92.2253C212.039 92.3756 213.739 93.1305 213.739 95.0881C213.739 97.0457 213.082 104.428 213.082 109.85H213.088ZM202.36 132.643C202.36 131.738 201.184 111.504 201.184 110.903C201.184 110.301 199.082 109.415 197.65 108.792C197.426 108.694 197.218 108.651 197.025 108.651C196.041 108.651 195.493 109.769 195.163 110.148C195.032 110.298 194.989 113.233 194.989 117.158C194.989 125.004 195.163 136.809 195.163 138.216C195.163 140.324 196.209 140.928 196.601 141.079C196.969 141.219 199.752 143.215 200.53 143.215C200.58 143.215 200.623 143.205 200.658 143.187C201.181 142.886 202.357 141.68 202.357 141.68V132.64L202.36 132.643Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M266.732 128.55C266.701 129.355 266.689 130.426 266.689 131.669C266.689 136.527 266.885 143.995 266.885 148.377C266.885 150.325 266.848 151.662 266.736 151.885C266.524 152.314 265.78 152.42 264.927 152.42C264.074 152.42 263.118 152.314 262.48 152.314C261.496 152.314 254.806 152.101 249.841 152.101C248.365 152.101 247.039 152.12 246.065 152.17C241.809 152.383 221.596 153.025 219.682 153.025C217.767 153.025 216.914 151.528 216.674 150.885C216.625 150.751 216.606 150.438 216.606 150.008C216.606 148.781 216.758 146.604 216.758 144.959C216.758 144.439 216.743 143.973 216.702 143.606C216.684 143.453 216.677 143.011 216.677 142.328C216.677 134.538 217.708 95.3982 217.767 94.5869C217.864 93.2463 219.28 93.0615 220.046 93.0615C220.335 93.0615 220.531 93.0866 220.531 93.0866C220.531 93.0866 245.875 92.4445 252.266 92.1626C252.836 92.1375 253.483 92.125 254.181 92.125C259.46 92.125 267.691 92.7671 268.647 92.8047C269.749 92.8454 270.038 93.688 270.038 94.659C270.038 95.5203 269.808 96.4819 269.708 97.0864C269.497 98.3706 266.941 123.197 266.729 128.55H266.732ZM256.042 123.657C256.042 122.611 255.989 121.38 255.883 120.199C255.812 119.413 255.787 118.36 255.787 117.396C255.787 116.431 255.812 115.573 255.834 115.137C255.855 114.733 255.569 114.386 255.17 114.339C253.692 114.154 250.286 113.737 248.645 113.571C248.054 113.512 247.341 113.493 246.488 113.493C245.249 113.493 243.705 113.531 241.784 113.531C240.268 113.531 238.516 113.509 236.489 113.424L234.786 113.355C234.437 113.343 234.148 113.621 234.148 113.972V121.552C234.148 124.121 234.786 129.903 235.424 130.758C235.664 131.08 236.178 131.19 236.825 131.19C237.896 131.19 239.337 130.893 240.53 130.758C242.444 130.545 250.775 129.192 253.116 128.55C255.457 127.908 255.669 126.836 255.883 125.981C255.989 125.552 256.042 124.7 256.042 123.657Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M292.653 140.656C292.653 143.127 292.902 146.027 292.902 148.514C292.902 148.837 292.909 149.159 292.909 149.47C292.909 150.967 292.787 152.245 291.38 152.386C289.341 152.589 285.051 152.646 282.564 152.805C278.803 153.047 275.342 153.26 274.159 153.26C273.225 153.26 272.73 152.752 272.73 151.872C272.73 151.296 272.926 144.004 272.935 141.965C272.963 136.399 272.979 131.149 272.979 126.003C272.979 115.476 272.907 105.377 272.692 93.8852C272.692 93.8037 272.692 93.7254 272.692 93.6534C272.692 92.6511 272.857 92.5164 273.548 92.4349C274.149 92.3472 278.243 92.0277 279.305 92.0215C280.095 92.0215 280.108 92.9831 280.114 93.4999C280.123 94.0731 280.674 105.747 280.777 107.861C281.151 115.651 281.857 128.913 282.262 136.205C282.271 136.386 282.38 136.452 282.72 136.452C282.797 136.452 282.894 136.449 282.975 136.446C283.236 136.446 285.764 136.496 286.626 136.599C287.526 136.706 290.508 137.107 291.545 137.157C292.383 137.198 292.818 137.191 292.818 137.768C292.818 138.654 292.653 139.584 292.653 140.652V140.656Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M10.5377 34.5235C10.4848 34.8931 10.7463 36.6033 10.8646 36.8226C10.958 36.8946 11.5401 36.9009 11.9261 36.9009C12.1939 36.9009 12.4772 36.904 12.7511 36.9197C12.8009 36.9197 12.885 36.9228 13.0002 36.9228C14.1582 36.9228 18.3951 36.7787 21.5673 36.6722C23.7091 36.6002 25.3995 36.5438 25.717 36.5438C26.8346 36.5438 27.1677 36.9729 27.258 37.1546C27.2985 37.2392 27.3296 37.4803 27.3296 39.1341C27.3296 40.0957 27.3202 41.5303 27.2953 43.6884C27.2891 44.3148 27.2829 44.7878 27.2829 44.9663C27.2829 45.6304 26.8346 46.119 26.0844 46.2694C25.9941 46.2881 16.9164 48.133 14.7871 48.8816C12.72 49.6114 7.54918 52.6967 7.1258 53.2542C7.13203 53.8368 7.23165 58.5508 7.28457 59.6627C7.34994 61.0378 8.14066 75.8125 8.24339 77.1029C8.29009 77.7012 8.21226 78.0833 7.99746 78.3089C7.76398 78.5563 7.44022 78.5438 7.18495 78.5375H7.05109C6.94524 78.5375 6.68686 78.5375 6.33508 78.5375C5.60351 78.5438 4.51083 78.5563 3.61115 78.5563C2.92939 78.5563 2.35659 78.55 2.13867 78.5312C1.55964 78.4843 1.22966 77.9486 1.22966 77.0654C1.22966 76.9307 1.20164 75.1422 1.1674 73.0874C1.1207 70.2434 1.06778 67.0235 1.06778 66.682C1.06778 66.4315 0.862319 56.5336 0.644404 47.4627C0.339324 35.0059 0 20.8764 0 20.297C0 19.9117 0.0716005 19.4795 0.211688 19.0128C0.401585 18.3738 0.930806 17.9071 1.59078 17.7881C2.06396 17.7035 2.76129 17.6095 3.39324 17.6502C4.34584 17.7129 7.69861 17.7379 11.235 17.7379C15.0984 17.7379 19.1827 17.7066 20.6054 17.6502C21.1813 17.6283 22.1993 17.6252 23.1861 17.6252C24.3068 17.6252 25.468 17.622 25.9723 17.5907C26.9654 17.5218 27.1864 18.4051 27.2798 18.781C27.2953 18.8405 27.3047 18.8937 27.3202 18.9313C27.3763 19.0848 27.395 20.109 27.395 21.3463C27.395 23.0721 27.3576 25.2083 27.3327 25.9287C27.2704 27.7611 26.2805 28.1401 25.9567 28.2653C25.8291 28.3155 25.4617 28.4126 24.4407 28.6757C22.5292 29.1706 19.3321 29.9943 18.0371 30.4798C16.2969 31.1313 11.1105 34.1445 10.5471 34.5267L10.5377 34.5235Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M58.1396 62.159C58.1396 63.9725 58.1085 65.4572 58.0213 65.7642C57.791 66.5723 56.7294 68.1353 56.3839 68.5957C56.0383 69.0593 51.9291 75.4772 51.1259 76.633C50.357 77.7387 49.9025 78.315 49.3639 78.315C49.1522 78.315 48.8751 78.2931 48.2899 78.2931C46.8984 78.2931 44.4235 78.3275 42.8981 78.3275C39.5173 78.3275 39.2029 76.8084 37.4471 75.0418C36.8432 74.4342 31.7564 68.8839 31.1525 68.2762C30.5485 67.6686 30.2902 66.1933 30.2902 65.8487V28.6724C30.2902 27.4571 30.8941 26.3295 30.8941 26.3295C30.8941 26.3295 37.0144 19.1285 37.7926 18.3486C38.5678 17.5687 39.0005 17.481 39.7757 17.481H45.3231C46.7022 17.481 50.8426 18.0009 51.3002 18.2327C51.761 18.4645 52.4521 20.372 52.9097 21.2396C53.3704 22.1072 54.7495 25.1706 55.2663 25.75C55.783 26.3295 56.9909 27.6575 57.3925 28.1211C57.6384 28.4061 57.6696 28.9731 57.6696 29.5557C57.6696 29.7467 57.6664 29.9409 57.6664 30.1257C57.6664 37.1012 58.1396 55.1835 58.1396 62.1558V62.159Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M92.104 16.6633C92.792 16.6633 93.3742 16.6727 93.508 16.7009C93.8256 16.7667 93.8536 18.0102 93.9532 18.7557C94.0248 19.2819 94.5291 32.0394 94.5291 33.9031C94.5291 35.2562 94.663 40.6781 94.663 43.7852C94.663 44.9536 94.6443 45.793 94.5914 45.9684C94.4015 46.6105 92.3593 46.7389 91.7211 46.8016C91.0829 46.8642 79.2813 47.7005 78.6431 47.8289C77.8742 47.9824 75.8445 49.3042 75.8445 49.8461C75.8445 50.081 75.9192 50.3472 75.9628 50.5258C76.0282 50.7826 77.9396 51.6816 78.3536 51.7442C78.7677 51.81 91.2075 52.1295 92.1663 52.1921C93.122 52.2548 94.526 52.3832 94.6536 52.7058C94.7813 53.0284 94.8435 55.2742 94.9743 56.2358C95.0957 57.163 95.874 74.3776 95.874 76.3603C95.874 78.343 92.0293 78.4057 90.0588 78.4057C89.2058 78.4057 86.2888 78.3336 84.4521 78.3336C83.5338 78.3336 83.0668 78.4026 82.8209 78.4026C82.4193 78.4026 82.0955 77.7135 82.0955 77.4785C82.0955 77.2217 81.9056 70.099 81.8403 69.2627C81.7749 68.4264 81.7749 59.3774 81.7126 58.6727C81.6504 58.0055 80.9095 57.5138 80.5577 57.5138C80.4332 57.5138 80.3242 57.5388 80.0596 57.5388C79.4743 57.5388 78.475 57.5012 77.7839 57.5012C77.0928 57.5012 75.9005 57.5451 75.9005 57.9397C75.9005 58.8418 76.3706 65.3537 76.6726 67.5306C76.9341 69.4256 77.152 75.0291 77.152 77.1998C77.152 77.347 77.152 77.4754 77.152 77.585C77.152 78.2209 77.096 78.3055 76.3457 78.3055C76.1496 78.3055 75.9254 78.2961 75.6857 78.2961C74.5713 78.2961 71.0037 78.3838 66.9194 78.3838C64.3044 78.3838 61.9945 78.365 61.6147 78.3117C60.9205 78.2115 60.8427 76.8709 60.8427 76.2789C60.8427 76.1098 60.8489 76.0033 60.8489 76.0033V71.5117C60.8489 70.3559 62.3805 18.8872 62.3805 18.1167C62.3805 17.3462 64.0398 17.3462 64.8025 17.3462C67.0159 17.3462 88.5614 16.6665 92.104 16.6665V16.6633ZM81.3889 39.4784C81.3889 35.6884 81.3173 25.8094 79.9195 24.403C79.9195 24.403 77.1146 24.7225 76.987 25.0452C76.9341 25.1798 76.9123 25.7656 76.9123 26.4515C76.9123 27.3818 76.9496 28.4906 76.9839 28.8978C77.0461 29.6025 77.6781 42.5511 77.812 42.761C78.1575 43.2935 78.9731 43.4595 79.5522 43.4595C79.879 43.4595 80.1281 43.4062 80.1748 43.3373C80.3024 43.1463 81.3858 40.9005 81.3858 40.5152C81.3858 40.2646 81.3858 39.9138 81.3858 39.4816L81.3889 39.4784Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M111.978 45.6959C111.978 45.8556 112.003 46.0185 112.055 46.1751C112.501 47.5157 112.781 48.2518 113.357 49.6018C117.525 59.5027 124.156 75.0072 124.156 75.0072C124.673 76.2194 125.196 77.0275 125.196 77.5412C125.196 78.1113 124.548 78.318 122.525 78.318H119.004C115.941 78.318 116.127 76.6141 115.237 74.4779L109.403 60.48C108.83 59.1049 108.273 56.8654 107.909 56.8654C107.731 56.8654 107.601 57.4135 107.538 58.8857L106.891 74.6564C106.779 77.3658 106.81 77.4629 103.796 77.4629H100.802C98.9494 77.4629 98.6101 76.9367 98.6101 75.9218C98.6101 75.3549 98.7159 74.6376 98.7222 73.7731L99.2234 20.7916C99.2452 18.4456 99.0086 18.1355 101.611 18.1355H120.984C122.014 18.1355 122.842 18.0603 123.505 18.0603C125.003 18.0603 125.653 18.4487 125.828 20.9701L126.516 30.893C126.541 31.2658 126.553 31.5915 126.553 31.8828C126.553 33.9877 125.874 34.1631 124.455 35.2155L115.165 42.1126C113.652 43.0085 111.965 44.3741 111.965 45.7022L111.978 45.6959ZM106.374 31.7732C106.533 34.0566 106.43 34.1881 108.721 34.1881H112.507C114.2 34.1881 114.471 33.9281 115.256 33.1827L117.074 31.4506C117.712 30.8429 117.78 30.5798 117.684 29.2047C117.569 27.5541 117.323 27.3192 116.501 26.5455L114.428 24.5973C113.413 23.6419 113.167 23.2692 111.131 23.2692H107.784C106.19 23.2692 105.867 23.3318 105.867 24.2872C105.867 24.5879 105.898 24.9794 105.935 25.4837L106.371 31.7732H106.374Z"
          fill={color || '#201E1E'}
        />
        <path
          d="M175.66 35.4568C175.66 35.7762 175.651 36.0331 175.623 36.1709C175.542 36.5781 174.976 62.1433 174.895 63.4463C174.814 64.7493 174.652 64.8307 174.328 65.1565C174.004 65.4822 173.195 66.2152 172.79 66.5409C172.386 66.8667 170.848 68.8212 170.605 69.0655C170.362 69.3098 164.696 76.5546 164.052 77.2061C163.404 77.8576 162.514 78.2648 161.947 78.2648C161.381 78.2648 144.714 77.1247 142.771 76.9618C140.828 76.799 140.747 76.6361 140.343 76.3918C139.938 76.1474 138.805 74.6816 138.481 74.4373C138.157 74.1929 130.147 65.2379 129.338 64.505C128.529 63.772 128.367 62.9577 128.367 62.6319V60.3517C128.367 59.293 129.5 33.0763 129.5 31.2878C129.5 29.4993 130.228 29.2268 130.552 28.6818C130.876 28.1399 138.643 20.3219 140.371 18.8027C141.731 17.6031 142.491 17.3494 143.649 17.3494C143.96 17.3494 144.299 17.3682 144.685 17.3901C145.075 17.412 145.794 17.4214 146.712 17.4214C149.224 17.4214 153.222 17.3588 155.983 17.3588C156.995 17.3588 157.838 17.3682 158.386 17.3901C158.392 17.3901 163.753 17.3494 164.964 17.3494C166.175 17.3494 166.966 18.3423 167.367 18.8278C167.772 19.3164 169.31 21.841 169.876 23.0625C170.443 24.2841 173.762 29.6559 174.73 30.6331C175.564 31.4726 175.623 32.1303 175.623 32.9165C175.623 33.0481 175.623 33.1828 175.623 33.3206C175.623 33.9689 175.657 34.8272 175.657 35.4536L175.66 35.4568ZM158.822 33.355C158.822 33.0199 158.794 32.7349 158.713 32.5908C158.498 32.2118 157.798 30.0944 157.203 30.0944C156.609 30.0944 155.208 30.3105 155.208 30.3105C153.645 30.5799 149.869 31.8296 149.869 31.8296V37.2578C149.869 38.5044 149.33 49.6864 149.274 50.3379C149.224 50.9456 148.891 57.6141 148.891 59.0236C148.891 59.3055 148.907 59.3462 148.907 59.6876C148.907 60.5208 148.851 62.1308 148.851 63.2959C148.851 63.7971 148.86 64.2137 148.891 64.4517C149.003 65.3757 149.165 67.0577 149.274 67.656C149.383 68.2542 149.274 69.1219 149.651 69.338C150.028 69.5541 151.917 70.5314 152.456 70.5314C152.994 70.5314 154.131 70.4249 154.884 70.0428C155.64 69.6637 156.394 69.1187 156.612 68.6865C156.826 68.2542 158.121 60.4362 158.23 59.459C158.336 58.4817 158.663 35.7387 158.716 35.0339C158.75 34.5954 158.825 33.9032 158.825 33.355H158.822ZM149.81 13.9165C149.704 13.7818 149.654 13.6189 149.654 13.4247C149.654 13.1741 149.741 12.8672 149.919 12.4944C150.42 11.4357 153.243 7.21977 155.304 4.1408C156.257 2.71877 157.057 1.47841 157.156 1.33433C157.978 0.156611 159.208 0 161.798 0C162.271 0 162.679 0.0125289 163.242 0.0125289C164.36 0.0125289 165.366 0.0689089 166.931 0.0689089C167.595 0.0689089 167.819 0.5638 167.819 1.19651C167.819 2.07353 167.383 3.21053 167.075 3.63338C166.67 4.19091 163.121 9.12416 162.324 10.6965C161.773 11.7866 161.02 13.0551 160.624 13.6878C160.257 14.2861 160.036 14.5053 158.218 14.6964C158.171 14.7027 158.09 14.7027 157.981 14.7027C156.677 14.7027 151.27 14.3832 151.123 14.3738C150.635 14.333 150.084 14.2829 149.803 13.9227L149.81 13.9165Z"
          fill={color || '#201E1E'}
        />
      </g>
    </svg>
  )
}
