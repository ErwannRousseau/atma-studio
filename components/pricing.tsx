export default function Pricing() {
  return (
    <section className="relative">
      {/* Radial gradient  */}
      <div
        className="-z-10 pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 flex aspect-square w-1/3 items-center justify-center">
          <div className="translate-z-0 absolute inset-0 rounded-full bg-buttercup-500 opacity-50 blur-[120px]" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div>
              <div className="inline-flex bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-3 font-medium text-transparent">
                Nos tarifs.
              </div>
            </div>
            <h3 className="h3 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
              Plusieurs tarifs pour tous les budgets
            </h3>
            <p className="text-slate-400">
              All the lorem ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>
          {/* Pricing tabs */}
          <div className="relative">
            {/* Blurred shape */}
            <div
              className="-mb-20 -translate-x-1/2 pointer-events-none absolute bottom-0 left-2/3 opacity-70 blur-2xl max-md:hidden"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <title>Blurred shape</title>
                <defs>
                  <linearGradient
                    id="bs5-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f3a710" />
                    <stop offset="100%" stopColor="#fce98b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs5-a)"
                  fillRule="evenodd"
                  d="m661 736 461 369-284 58z"
                  transform="matrix(1 0 0 -1 -661 1163)"
                />
              </svg>
            </div>
            {/* Content */}
            <div className="xl:-mx-6 before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:-z-10 grid text-sm before:[&>div:nth-of-type(4n+3)]:pointer-events-none before:[&>div:nth-of-type(4n+3)]:absolute [&>div:nth-of-type(4n+3)]:relative max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:md:[&>div:nth-of-type(n)]:mb-0 max-md:[&>div:nth-of-type(4n+5)]:hidden md:grid-cols-4 before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl before:[&>div:nth-of-type(4n+3)]:border-buttercup-500 before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 [&>div:nth-of-type(4n+1)]:bg-transparent [&>div]:bg-slate-700/20 [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6">
              {/* Pricing toggle */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 pb-5 md:border-b">
                  {/* Toggle switch */}
                  <div className="max-md:text-center">
                    <div className="inline-flex items-center whitespace-nowrap">
                      <div className="mr-2 font-medium text-slate-500 text-sm md:max-lg:hidden">
                        Monthly
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggle"
                          className="peer sr-only"
                        />
                        <label
                          htmlFor="toggle"
                          className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 peer-checked:before:translate-x-full before:rounded-full before:bg-white peer-checked:bg-buttercup-500 before:shadow-sm peer-focus-visible:outline peer-checked:peer-focus-visible:outline-buttercup-500 peer-focus-visible:outline-gray-400 peer-focus-visible:outline-offset-2 before:transition-transform before:duration-150"
                        >
                          <span className="sr-only">Pay Yearly</span>
                        </label>
                      </div>
                      <div className="ml-2 font-medium text-slate-500 text-sm">
                        Yearly <span className="text-teal-500">(-20%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pro price */}
              <div className="flex flex-col justify-end px-6">
                <div className="mb-4 grow border-slate-800 border-b pb-4">
                  <div className="bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-0.5 font-medium text-base text-transparent">
                    Pro
                  </div>
                  <div className="mb-1">
                    <span className="font-medium text-lg text-slate-500">
                      $
                    </span>
                    <span className="font-bold text-3xl text-slate-50">29</span>
                    <span className="font-medium text-slate-600 text-sm">
                      /mo
                    </span>
                  </div>
                  <div className="text-slate-500">
                    Everything at your fingertips.
                  </div>
                </div>
                <div className="border-slate-800 border-b pb-4">
                  <a
                    className="btn-sm group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                    href="#0"
                  >
                    Get Started{" "}
                    <span className="ml-1 text-buttercup-500 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              {/* Team price */}
              <div className="flex flex-col justify-end px-6">
                <div className="mb-4 grow border-slate-800 border-b pb-4">
                  <div className="bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-0.5 font-medium text-base text-transparent">
                    Team
                  </div>
                  <div className="mb-1">
                    <span className="font-medium text-lg text-slate-500">
                      $
                    </span>
                    <span className="font-bold text-3xl text-slate-50">54</span>
                    <span className="font-medium text-slate-600 text-sm">
                      /mo
                    </span>
                  </div>
                  <div className="text-slate-500">
                    Everything at your fingertips.
                  </div>
                </div>
                <div className="border-slate-800 border-b pb-4">
                  <a
                    className="btn-sm group w-full bg-buttercup-500 text-white transition duration-150 ease-in-out hover:bg-buttercup-600"
                    href="#0"
                  >
                    Get Started{" "}
                    <span className="ml-1 text-buttercup-300 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              {/* Enterprise price */}
              <div className="flex flex-col justify-end px-6">
                <div className="mb-4 grow border-slate-800 border-b pb-4">
                  <div className="bg-gradient-to-r from-buttercup-500 to-buttercup-200 bg-clip-text pb-0.5 font-medium text-base text-transparent">
                    Enterprise
                  </div>
                  <div className="mb-1">
                    <span className="font-medium text-lg text-slate-500">
                      $
                    </span>
                    <span className="font-bold text-3xl text-slate-50">85</span>
                    <span className="font-medium text-slate-600 text-sm">
                      /mo
                    </span>
                  </div>
                  <div className="text-slate-500">
                    Everything at your fingertips.
                  </div>
                </div>
                <div className="border-slate-800 border-b pb-4">
                  <a
                    className="btn-sm group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                    href="#0"
                  >
                    Get Started{" "}
                    <span className="ml-1 text-buttercup-500 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              {/* # Usage */}
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50">Usage</div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Usage
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Usage
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Usage
                </div>
              </div>
              {/* Social Connections */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Social Connections
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    100 <span className="md:hidden">Social Connections</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    250 <span className="md:hidden">Social Connections</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited{" "}
                    <span className="md:hidden">Social Connections</span>
                  </span>
                </div>
              </div>
              {/* Custom Domains */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Custom Domains
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    4 <span className="md:hidden">Custom Domains</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited <span className="md:hidden">Custom Domains</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited <span className="md:hidden">Custom Domains</span>
                  </span>
                </div>
              </div>
              {/* User Role Management */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  User Role Management
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited{" "}
                    <span className="md:hidden">User Role Management</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited{" "}
                    <span className="md:hidden">User Role Management</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited{" "}
                    <span className="md:hidden">User Role Management</span>
                  </span>
                </div>
              </div>
              {/* External Databases */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  External Databases
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    1 <span className="md:hidden">External Databases</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    5 <span className="md:hidden">External Databases</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    Unlimited{" "}
                    <span className="md:hidden">External Databases</span>
                  </span>
                </div>
              </div>
              {/* # Features */}
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50">
                  Features
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Features
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Features
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Features
                </div>
              </div>
              {/* Custom Connection */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Custom Connection
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Custom Connection</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Custom Connection</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Custom Connection</span>
                  </span>
                </div>
              </div>
              {/* Advanced Deployment Options */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Advanced Deployment Options
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">
                      Advanced Deployment Options
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">
                      Advanced Deployment Options
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">
                      Advanced Deployment Options
                    </span>
                  </span>
                </div>
              </div>
              {/* Extra Add-ons */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Extra Add-ons
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Extra Add-ons</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Extra Add-ons</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Extra Add-ons</span>
                  </span>
                </div>
              </div>
              {/* Admin Roles */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Admin Roles
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Admin Roles</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Admin Roles</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Admin Roles</span>
                  </span>
                </div>
              </div>
              {/* Deploy and Monitor */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Deploy and Monitor
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Deploy and Monitor</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Deploy and Monitor</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Deploy and Monitor</span>
                  </span>
                </div>
              </div>
              {/* Enterprise Add-ons */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Enterprise Add-ons
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Enterprise Add-ons</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Enterprise Add-ons</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Enterprise Add-ons</span>
                  </span>
                </div>
              </div>
              {/* # Support */}
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50">
                  Support
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 hidden py-2 font-medium text-slate-50">
                  Support
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Support
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="mt-4 py-2 font-medium text-slate-50 md:hidden">
                  Support
                </div>
              </div>
              {/* Premium Support */}
              <div className="flex flex-col justify-end px-6">
                <div className="border-slate-800 border-b py-2 text-slate-400">
                  Premium Support
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex items-center border-slate-800 border-b py-2 text-slate-400 max-md:hidden">
                  <span>
                    <span className="md:hidden">Premium Support</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Premium Support</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end px-6">
                <div className="flex h-full items-center border-slate-800 border-b py-2 text-slate-400">
                  <svg
                    className="mr-3 shrink-0 fill-buttercup-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                  >
                    <title>Checkmark</title>
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                  </svg>
                  <span>
                    <span className="md:hidden">Premium Support</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
