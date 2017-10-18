(function() {
  Polymer({

    is: 'og-slider',

    properties: {
      /**
      * This property set the cursor to a default position when starting
      *
      * @property start
      */
      start: { type: Number, defaultValue: 0 },

      /**
      * This property defines the max default number of the slider.
      *
      * @property max
      */
      max: { type: Number, value: 1 },

      /**
      * This property display a default message when the condition to show is not fufilled.
      *
      * @property errorMessage
      */
      errorMessage: { type: String, value: "Your item is too short to display the slider." },

      /**
      * Data to be displayed
      *
      * @property ranges
      */
      ranges: {
        type: Array,
        observer:'_onUpdateValue',
        notify: true,
        value() {
          return [];
        }
      },
    },

    /**
    * Listen to the changeslider and send it back to root to be listened
    *
    * @method listeners
    */
    listeners: {
      'changeSlider': 'valueChange'
    },

    /**
    * Trigger of notification from the child px-slider component
    *
    * @method notifyResize
    */
    notifyResize() {
      if (this.$.slider) {
        this.$.slider.notifyResize();
      }
    },

    /**
    * Callback function for the listener, get the value and make it available for root component
    *
    * @method _changeSlider
    */
    _changeSlider(e){
      this.fire("value-change", {value: e.detail.value});
    },

    /**
    * Observer callback updating the change of property data for ranges
    *
    * @method _onUpdateValue
    */
    _onUpdateValue: function(newValue, oldValue) {
      this.max = newValue.length -1;
    },

    /**
    * Check if string is empty or null
    *
    * @method _isEmpty
    */
    _isEmpty: function(item) {
      if (item.length < 1) return true;
      return false;
    },

    attached: function() {
      const svg = document.querySelector('.handleBody');
      if (svg) {
        svg.style.strokeWidth = ".5rem";
        svg.style.fill = "#889aa5";
      }
    }
  });
})();
