/**
 * Renders the top section of the page.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.city - The city name.
 * @param {string} props.currentTime - The current time.
 * @returns {JSX.Element} The rendered top section.
 */
export const Top = (props: {
  city: string;
  currentTime: string;
}): JSX.Element => {
  const { city, currentTime } = props;
  const data = [city, currentTime];

  /**
   * Build the top section of the page.
   *
   * @returns {JSX.Element[]} An array of JSX elements representing the top section.
   */
  const BuildTop = (): JSX.Element[] =>
    data.map((e, i) => {
      return (
        <div
          key={i + "_" + e}
          className="flex justify-between text-xs capitalize section-row drop-shadow-md"
        >
          <span className="flex justify-between text-lg font-semibold capitalize drop-shadow-md sm:text-2xl md:text-3xl section-row">
            {e}
          </span>
        </div>
      );
    });

  return (
    <div className="flex items-center justify-between top">
      <BuildTop />
    </div>
  );
};
