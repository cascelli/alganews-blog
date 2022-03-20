import { SVGProps } from "react";
import { useTheme } from "styled-components";

function Logo(props: SVGProps<SVGSVGElement>) {
  const theme = useTheme();
  return (
    <svg
      width={109}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.102 19c-.094-.188-.17-.521-.229-1.002-.756.785-1.658 1.178-2.707 1.178-.937 0-1.708-.264-2.312-.791-.597-.533-.896-1.207-.896-2.022 0-.99.375-1.758 1.125-2.303.756-.55 1.816-.826 3.182-.826h1.582v-.747c0-.568-.17-1.02-.51-1.353-.34-.34-.84-.51-1.503-.51-.58 0-1.066.146-1.459.44-.393.292-.589.647-.589 1.063H1.151c0-.475.167-.932.501-1.371.34-.446.797-.797 1.371-1.055a4.643 4.643 0 0 1 1.908-.387c1.095 0 1.954.276 2.575.827.621.544.943 1.297.967 2.258v4.377c0 .873.111 1.568.334 2.083V19H7.102Zm-2.699-1.24c.51 0 .993-.131 1.45-.395.458-.263.789-.606.994-1.028v-1.951H5.572c-1.992 0-2.988.583-2.988 1.749 0 .51.17.908.51 1.195.34.287.776.43 1.31.43ZM12.788 19h-1.626V5.5h1.626V19Zm2.224-4.834c0-1.482.342-2.66 1.028-3.533.686-.88 1.594-1.319 2.725-1.319 1.16 0 2.065.41 2.715 1.23l.08-1.054h1.485v9.281c0 1.231-.366 2.2-1.099 2.91-.726.709-1.705 1.063-2.935 1.063a4.89 4.89 0 0 1-2.013-.44c-.656-.292-1.157-.694-1.503-1.203l.844-.976c.697.861 1.55 1.292 2.558 1.292.79 0 1.406-.223 1.845-.668.445-.445.668-1.072.668-1.88v-.818c-.65.75-1.538 1.125-2.663 1.125-1.113 0-2.016-.448-2.707-1.345-.685-.896-1.028-2.118-1.028-3.665Zm1.634.185c0 1.072.22 1.916.66 2.53.44.61 1.054.915 1.845.915 1.026 0 1.779-.466 2.26-1.398v-4.341c-.499-.909-1.246-1.363-2.242-1.363-.791 0-1.41.308-1.855.923-.445.615-.668 1.527-.668 2.734ZM31.377 19c-.094-.188-.17-.521-.229-1.002-.755.785-1.658 1.178-2.707 1.178-.937 0-1.708-.264-2.311-.791-.598-.533-.897-1.207-.897-2.022 0-.99.375-1.758 1.125-2.303.756-.55 1.817-.826 3.182-.826h1.582v-.747c0-.568-.17-1.02-.51-1.353-.34-.34-.84-.51-1.503-.51-.58 0-1.066.146-1.459.44-.392.292-.588.647-.588 1.063h-1.635c0-.475.167-.932.5-1.371.34-.446.798-.797 1.372-1.055a4.643 4.643 0 0 1 1.907-.387c1.096 0 1.954.276 2.575.827.621.544.944 1.297.967 2.258v4.377c0 .873.111 1.568.334 2.083V19h-1.705Zm-2.698-1.24c.51 0 .993-.131 1.45-.395.457-.263.788-.606.993-1.028v-1.951h-1.274c-1.992 0-2.989.583-2.989 1.749 0 .51.17.908.51 1.195.34.287.776.43 1.31.43Zm8.938-8.27.097 1.116c.656-.86 1.561-1.292 2.716-1.292.99 0 1.728.296 2.215.888.492.592.747 1.483.764 2.672V19h-2.97v-6.003c0-.48-.097-.832-.29-1.055-.194-.228-.546-.342-1.055-.342-.58 0-1.011.228-1.292.685V19H34.84V9.49h2.777Zm12.041 9.686c-1.459 0-2.64-.434-3.542-1.301-.902-.873-1.353-2.007-1.353-3.401v-.247c0-.972.178-1.83.536-2.575A3.956 3.956 0 0 1 46.88 9.93c.691-.41 1.512-.616 2.46-.616 1.337 0 2.391.416 3.165 1.248.773.827 1.16 1.981 1.16 3.463v1.152h-5.889c.106.533.337.952.695 1.257.357.304.82.457 1.388.457.938 0 1.67-.328 2.198-.985l1.353 1.6c-.369.51-.893.917-1.573 1.221-.674.3-1.4.449-2.18.449Zm-.334-7.576c-.867 0-1.383.574-1.547 1.722h2.989v-.228c.011-.475-.109-.841-.36-1.099-.253-.264-.613-.395-1.082-.395Zm13.755 3.498.958-5.608h2.839L64.635 19H62.13l-1.573-5.643L58.975 19H56.47l-2.242-9.51h2.84l.94 5.74 1.511-5.74h2.066l1.494 5.608Zm9.844 1.23c0-.252-.132-.454-.396-.606-.263-.153-.764-.31-1.503-.475-.738-.164-1.347-.378-1.828-.642-.48-.27-.846-.594-1.098-.975a2.319 2.319 0 0 1-.378-1.31c0-.873.36-1.59 1.08-2.153.722-.568 1.665-.853 2.83-.853 1.255 0 2.263.285 3.024.853.762.568 1.143 1.315 1.143 2.241h-2.97c0-.761-.402-1.142-1.205-1.142-.31 0-.571.088-.782.263a.79.79 0 0 0-.317.642c0 .264.13.477.387.642.258.164.668.298 1.23.404.569.105 1.067.231 1.495.378 1.43.492 2.144 1.374 2.144 2.645 0 .867-.386 1.574-1.16 2.118-.767.545-1.763.818-2.988.818-.815 0-1.541-.147-2.18-.44-.638-.293-1.136-.691-1.494-1.195-.357-.504-.536-1.034-.536-1.59h2.768c.012.439.159.76.44.966.281.2.641.299 1.081.299.404 0 .706-.082.905-.246a.783.783 0 0 0 .308-.642Z"
        fill={theme.primaryBackground}
      />
      <path
        d="M105 17a.998.998 0 0 1-1 1 1 1 0 0 1-1-1V5a.998.998 0 0 0-1-1H88a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10ZM97 7h3v2h-3V7Zm0 4h3v2h-3v-2Zm-7-4h5v6h-5V7Zm0 10v-2h10v2H90Z"
        fill={theme.pageForeground}
      />
    </svg>
  );
}

export default Logo;
