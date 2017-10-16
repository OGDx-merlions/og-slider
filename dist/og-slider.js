'use strict';(function(){Polymer({is:'og-slider',properties:{/**
      * This property set the cursor to a default position when starting
      *
      * @property start
      */start:{type:Number,defaultValue:0},/**
      * This property defines the max default number of the slider.
      *
      * @property max
      */max:{type:Number,value:1},/**
      * This property display a default message when the condition to show is not fufilled.
      *
      * @property errorMessage
      */errorMessage:{type:String,value:'Your item is too short to display the slider.'},/**
      * Data to be displayed
      *
      * @property ranges
      */ranges:{type:Array,observer:'_onUpdateValue',notify:true,value:function value(){return[]}}},ready:function ready(){if(this.ranges&&this.ranges.length>0){this.max=this.ranges.length-1}},/**
    * Listen to the changeslider and send it back to root to be listened
    *
    * @method listeners
    */listeners:{'changeSlider':'valueChange'},/**
    * Trigger of notification from the child px-slider component
    *
    * @method notifyResize
    */notifyResize:function notifyResize(){if(this.$.slider){this.$.slider.notifyResize()}},/**
    * Callback function for the listener, get the value and make it available for root component
    *
    * @method _changeSlider
    */_changeSlider:function _changeSlider(e){this.fire('value-change',{value:e.detail.value})},/**
    * Observer callback updating the change of property data for ranges
    *
    * @method _onUpdateValue
    */_onUpdateValue:function _onUpdateValue(newValue,oldValue){console.log(newValue,oldValue)}})})();
//# sourceMappingURL=og-slider.js.map
